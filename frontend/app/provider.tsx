'use client';
import { ThemeProvider } from '@wallet/components/provider/theme-provider';
import { Toaster } from 'sonner';

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
        </ThemeProvider>
    );
}
