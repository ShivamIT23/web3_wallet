package main

import (
	"backend/config"
	"backend/handlers"
	"backend/sendMail"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func main() {
	// Initialize OAuth providers (Goth)
	config.InitAuth()

	// Set JWT secret from environment
	if secret := os.Getenv("JWT_SECRET"); secret != "" {
		handlers.JWTSecret = []byte(secret)
	}

	// Create router
	r := mux.NewRouter()

	// ============================================
	// OAuth Authentication Routes (Goth)
	// ============================================

	// IMPORTANT: More specific routes must come BEFORE generic ones

	// Get current user from JWT (specific route)
	r.HandleFunc("/auth/user", handlers.HandleGetUser).Methods("GET", "OPTIONS")

	// Logout (specific route)
	r.HandleFunc("/auth/logout", handlers.HandleLogout).Methods("POST", "OPTIONS")

	// OAuth callback handlers (specific routes with /callback suffix)
	r.HandleFunc("/auth/{provider}/callback", handlers.HandleAuthCallback).Methods("GET")

	// Start OAuth flow (generic provider route - must be LAST among auth routes)
	r.HandleFunc("/auth/{provider}", handlers.HandleAuthBegin).Methods("GET")

	// ============================================
	// Static Files & Other Routes
	// ============================================

	// Static file server for images
	fs := http.FileServer(http.Dir("image/"))
	r.PathPrefix("/getImage/").Handler(http.StripPrefix("/getImage/", fs))

	// Health check endpoint
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Wallet Guardian API - OK")
	}).Methods("GET")

	// Email endpoints
	r.HandleFunc("/send-mail", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Sending Mail")
		sendMail.SendMailFunc("shivam.gupta.23112003@gmail.com", "Mail By Wallet Guardian", "<strong>testing mail</strong>")
		fmt.Fprint(w, "Mail Sent")
	}).Methods("GET")

	r.HandleFunc("/send-otp", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("Sending OTP")
		sendMail.SendOTPFunc("shivam.gupta.23112003@gmail.com", "1234")
		fmt.Fprint(w, "OTP Sent")
	}).Methods("GET")

	// CORS middleware
	corsHandler := corsMiddleware(r)

	fmt.Println("Server is running on :8005")
	fmt.Println("OAuth endpoints available:")
	fmt.Println("  GET  /auth/google          - Start Google OAuth")
	fmt.Println("  GET  /auth/github          - Start GitHub OAuth")
	fmt.Println("  GET  /auth/google/callback - Google OAuth callback")
	fmt.Println("  GET  /auth/github/callback - GitHub OAuth callback")
	fmt.Println("  GET  /auth/user            - Get current user (requires Bearer token)")
	fmt.Println("  POST /auth/logout          - Logout")

	log.Fatal(http.ListenAndServe(":8005", corsHandler))
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		if origin == "" {
			origin = "*"
		}
		w.Header().Set("Access-Control-Allow-Origin", origin)
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func testing() {
	res, err := http.Get("https://wallet-test.shivam23.me/")

	if err != nil {
		fmt.Println("There was an error during fetching itself")
	}

	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)

	if err != nil {
		fmt.Printf("error in res body")
	} else {
		fmt.Print(string(body))
	}
}
