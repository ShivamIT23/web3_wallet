'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function CallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      // Get parameters from URL (sent by backend after OAuth)
      const token = searchParams?.get('token');
      const errorParam = searchParams?.get('error');
      const provider = searchParams?.get('provider');
      const name = searchParams?.get('name');
      const email = searchParams?.get('email');
      const avatar = searchParams?.get('avatar');

      // Handle error from OAuth
      if (errorParam) {
        setError(decodeURIComponent(errorParam));
        setTimeout(() => {
          router.push('/login');
        }, 3000);
        return;
      }

      // Validate we have a token
      if (!token) {
        setError('Authentication failed - no token received');
        setTimeout(() => {
          router.push('/login');
        }, 3000);
        return;
      }

      try {
        // Store token and user info in localStorage
        localStorage.setItem('authToken', token);
        
        if (name || email || provider) {
          const user = {
            name: name ? decodeURIComponent(name) : '',
            email: email ? decodeURIComponent(email) : '',
            avatar: avatar ? decodeURIComponent(avatar) : '',
            provider: provider || '',
          };
          localStorage.setItem('user', JSON.stringify(user));
        }

        // Redirect to dashboard on success
        router.push('/dashboard');
      } catch (err) {
        console.error('Error processing callback:', err);
        setError('Failed to process authentication');
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      }
    };

    handleCallback();
  }, [searchParams, router]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-destructive/10 via-background to-background">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-destructive/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-destructive"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-foreground">Authentication Failed</h1>
          <p className="text-muted-foreground max-w-md">{error}</p>
          <p className="text-sm text-muted-foreground/70">
            Redirecting to login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div className="text-center space-y-4">
        {/* Animated spinner */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-foreground">
            Authenticating...
          </h1>
          <p className="text-muted-foreground">
            Please wait while we complete your sign in
          </p>
        </div>
      </div>
    </div>
  );
}

// Loading fallback for Suspense
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div className="text-center space-y-4">
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
        </div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

export default function CallbackPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CallbackHandler />
    </Suspense>
  );
}
