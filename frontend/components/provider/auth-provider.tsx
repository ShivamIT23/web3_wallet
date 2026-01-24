'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// ============================================
// Types
// ============================================

export interface User {
  name: string;
  email: string;
  avatar?: string;
  provider?: string;
}

export interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  loginWithGoogle: () => void;
  loginWithGithub: () => void;
  logout: () => Promise<void>;
}

// ============================================
// Context
// ============================================

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ============================================
// Storage Keys
// ============================================

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'authToken',
  USER: 'user',
} as const;

// ============================================
// Provider Component
// ============================================

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8005';

  // Load session from localStorage on mount
  useEffect(() => {
    const loadSession = () => {
      try {
        const storedToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
        const storedUser = localStorage.getItem(STORAGE_KEYS.USER);

        if (storedToken) {
          setAccessToken(storedToken);
        }

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error loading session:', error);
        clearSession();
      } finally {
        setIsLoading(false);
      }
    };

    loadSession();
  }, []);

  // Clear all session data
  const clearSession = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    setUser(null);
    setAccessToken(null);
  }, []);

  // Redirect to Google OAuth
  const loginWithGoogle = useCallback(() => {
    window.location.href = `${apiUrl}/auth/google`;
  }, [apiUrl]);

  // Redirect to GitHub OAuth
  const loginWithGithub = useCallback(() => {
    window.location.href = `${apiUrl}/auth/github`;
  }, [apiUrl]);

  // Logout - clear local session
  const logout = useCallback(async () => {
    try {
      await fetch(`${apiUrl}/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        credentials: 'include',
      });
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      clearSession();
    }
  }, [accessToken, apiUrl, clearSession]);

  const value: AuthContextType = {
    user,
    accessToken,
    isLoading,
    isAuthenticated: !!accessToken,
    loginWithGoogle,
    loginWithGithub,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ============================================
// Hook
// ============================================

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
