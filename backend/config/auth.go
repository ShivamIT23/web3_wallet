package config

import (
	"log"
	"os"

	"github.com/gorilla/sessions"
	"github.com/joho/godotenv"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/github"
	"github.com/markbates/goth/providers/google"
)

// AuthConfig holds the OAuth configuration values
type AuthConfig struct {
	GoogleClientID     string
	GoogleClientSecret string
	GithubClientID     string
	GithubClientSecret string
	SessionSecret      string
	CallbackBaseURL    string
}

var Config AuthConfig

// InitAuth initializes Goth OAuth providers
func InitAuth() {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Println("Warning: .env file not found, using system environment variables")
	}

	Config = AuthConfig{
		GoogleClientID:     getEnv("GOOGLE_CLIENT_ID", ""),
		GoogleClientSecret: getEnv("GOOGLE_CLIENT_SECRET", ""),
		GithubClientID:     getEnv("GITHUB_CLIENT_ID", ""),
		GithubClientSecret: getEnv("GITHUB_CLIENT_SECRET", ""),
		SessionSecret:      getEnv("SESSION_SECRET", "super-secret-session-key"),
		CallbackBaseURL:    getEnv("CALLBACK_BASE_URL", "http://localhost:8005"),
	}

	// Initialize session store for gothic
	store := sessions.NewCookieStore([]byte(Config.SessionSecret))
	store.MaxAge(86400 * 30) // 30 days
	store.Options.Path = "/"
	store.Options.HttpOnly = true
	store.Options.Secure = false // Set to true in production with HTTPS
	gothic.Store = store

	// Set up OAuth providers
	goth.UseProviders(
		google.New(
			Config.GoogleClientID,
			Config.GoogleClientSecret,
			Config.CallbackBaseURL+"/auth/google/callback",
			"email", "profile",
		),
		github.New(
			Config.GithubClientID,
			Config.GithubClientSecret,
			Config.CallbackBaseURL+"/auth/github/callback",
			"user:email",
		),
	)

	log.Println("Goth OAuth providers initialized successfully")
	log.Printf("Google callback: %s/auth/google/callback", Config.CallbackBaseURL)
	log.Printf("GitHub callback: %s/auth/github/callback", Config.CallbackBaseURL)
}

// getEnv gets an environment variable with a fallback default value
func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}
