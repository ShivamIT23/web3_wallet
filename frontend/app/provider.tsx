'use client';
import { ThemeProvider } from '@wallet/components/provider/theme-provider';
import { AuthProvider } from '@wallet/components/provider/auth-provider';
import { ScrollToTop } from '@wallet/components/provider/scroll-to-top';
import { PageTransition } from '@wallet/components/provider/page-transition';
import { Toaster } from 'sonner';

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <AuthProvider>
                <PageTransition>
                    {children}
                </PageTransition>
                <ScrollToTop />
            </AuthProvider>
            <Toaster />
        </ThemeProvider>
    );
}
