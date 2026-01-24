package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/joho/godotenv"
	"github.com/markbates/goth/gothic"
)

// JWTSecret should be set from environment variable in production
var JWTSecret = []byte("your-jwt-secret-key-change-in-production")

var frontend_url string

func init() {
	godotenv.Load()
	frontend_url = os.Getenv("FRONTEND_URI")
	if frontend_url == "" {
		frontend_url = "http://localhost:3000"
	}
}

// AuthResponse represents the response for successful authentication
type AuthResponse struct {
	AccessToken string   `json:"accessToken"`
	ExpiresIn   int      `json:"expiresIn"`
	User        UserInfo `json:"user"`
}

// UserInfo represents basic user information
type UserInfo struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Avatar   string `json:"avatar"`
	Provider string `json:"provider"`
}

// ErrorResponse represents an error response
type ErrorResponse struct {
	Error   string `json:"error"`
	Message string `json:"message"`
}

// JWTClaims represents the claims in our JWT token
type JWTClaims struct {
	UserID   string `json:"userId"`
	Email    string `json:"email"`
	Name     string `json:"name"`
	Provider string `json:"provider"`
	jwt.RegisteredClaims
}

// HandleAuthBegin starts the OAuth flow for a provider
// This handles routes like /auth/google and /auth/github
func HandleAuthBegin(w http.ResponseWriter, r *http.Request) {
	setCORSHeaders(w, r)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// Extract provider from URL path
	// Expected paths: /auth/google, /auth/github
	provider := extractProvider(r.URL.Path)
	if provider == "" {
		sendErrorResponse(w, http.StatusBadRequest, "invalid_provider", "Provider not specified")
		return
	}

	// Set the provider in the request query for gothic
	q := r.URL.Query()
	q.Set("provider", provider)
	r.URL.RawQuery = q.Encode()

	gothic.BeginAuthHandler(w, r)
}

// HandleAuthCallback handles the OAuth callback from providers
// This handles routes like /auth/google/callback and /auth/github/callback
func HandleAuthCallback(w http.ResponseWriter, r *http.Request) {
	setCORSHeaders(w, r)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// Extract provider from URL path
	provider := extractProviderFromCallback(r.URL.Path)
	if provider == "" {
		sendErrorResponse(w, http.StatusBadRequest, "invalid_provider", "Provider not specified")
		return
	}

	// Set the provider in the request query for gothic
	q := r.URL.Query()
	q.Set("provider", provider)
	r.URL.RawQuery = q.Encode()

	// Complete the OAuth flow
	user, err := gothic.CompleteUserAuth(w, r)
	if err != nil {
		// Redirect to frontend with error
		frontendURL := frontend_url + "/login?error=" + err.Error()
		http.Redirect(w, r, frontendURL, http.StatusTemporaryRedirect)
		return
	}

	// Generate JWT token
	expiresIn := 24 * time.Hour
	token, err := generateJWT(user.UserID, user.Email, user.Name, provider, expiresIn)
	if err != nil {
		sendErrorResponse(w, http.StatusInternalServerError, "token_generation_failed", err.Error())
		return
	}

	// Redirect to frontend with token in URL fragment (hash)
	// The frontend will capture this and store it
	frontendURL := fmt.Sprintf(
		frontend_url+"/auth/callback?token=%s&provider=%s&name=%s&email=%s&avatar=%s",
		token,
		provider,
		user.Name,
		user.Email,
		user.AvatarURL,
	)

	http.Redirect(w, r, frontendURL, http.StatusTemporaryRedirect)
}

// HandleGetUser returns the current user's information from the JWT token
func HandleGetUser(w http.ResponseWriter, r *http.Request) {
	setCORSHeaders(w, r)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// Get token from Authorization header
	authHeader := r.Header.Get("Authorization")
	if authHeader == "" {
		sendErrorResponse(w, http.StatusUnauthorized, "missing_token", "Authorization header is required")
		return
	}

	// Extract Bearer token
	tokenParts := strings.Split(authHeader, " ")
	if len(tokenParts) != 2 || tokenParts[0] != "Bearer" {
		sendErrorResponse(w, http.StatusUnauthorized, "invalid_token", "Invalid authorization header format")
		return
	}

	accessToken := tokenParts[1]

	// Parse and validate the JWT token
	claims, err := validateJWT(accessToken)
	if err != nil {
		sendErrorResponse(w, http.StatusUnauthorized, "invalid_token", "Invalid or expired token")
		return
	}

	user := UserInfo{
		ID:       claims.UserID,
		Name:     claims.Name,
		Email:    claims.Email,
		Provider: claims.Provider,
	}

	sendJSONResponse(w, http.StatusOK, user)
}

// HandleLogout handles user logout
func HandleLogout(w http.ResponseWriter, r *http.Request) {
	setCORSHeaders(w, r)

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// Clear the gothic session
	gothic.Logout(w, r)

	response := map[string]string{
		"message": "Logged out successfully",
	}

	sendJSONResponse(w, http.StatusOK, response)
}

// Helper functions

func extractProvider(path string) string {
	// Path format: /auth/{provider}
	parts := strings.Split(strings.Trim(path, "/"), "/")
	if len(parts) >= 2 && parts[0] == "auth" {
		provider := parts[1]
		if provider == "google" || provider == "github" {
			return provider
		}
	}
	return ""
}

func extractProviderFromCallback(path string) string {
	// Path format: /auth/{provider}/callback
	parts := strings.Split(strings.Trim(path, "/"), "/")
	if len(parts) >= 3 && parts[0] == "auth" && parts[2] == "callback" {
		provider := parts[1]
		if provider == "google" || provider == "github" {
			return provider
		}
	}
	return ""
}

func generateJWT(userID, email, name, provider string, expiresIn time.Duration) (string, error) {
	claims := JWTClaims{
		UserID:   userID,
		Email:    email,
		Name:     name,
		Provider: provider,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(expiresIn)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			Issuer:    "wallet-guardian",
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(JWTSecret)
}

func validateJWT(tokenString string) (*JWTClaims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &JWTClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return JWTSecret, nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*JWTClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, fmt.Errorf("invalid token")
}

func setCORSHeaders(w http.ResponseWriter, r *http.Request) {
	origin := r.Header.Get("Origin")
	if origin == "" {
		origin = "*"
	}
	w.Header().Set("Access-Control-Allow-Origin", origin)
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
	w.Header().Set("Access-Control-Allow-Credentials", "true")
}

func sendJSONResponse(w http.ResponseWriter, statusCode int, data interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	if err := json.NewEncoder(w).Encode(data); err != nil {
		fmt.Printf("Error encoding JSON response: %v\n", err)
	}
}

func sendErrorResponse(w http.ResponseWriter, statusCode int, errorCode, message string) {
	response := ErrorResponse{
		Error:   errorCode,
		Message: message,
	}
	sendJSONResponse(w, statusCode, response)
}
