import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@wallet/components/layout/header";
import Footer from "@wallet/components/layout/footer";
import ScrollingProvider from "@wallet/components/provider/scrolling-provider";
import Provider from "./provider";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Wallet Guardian - A Wallet to give amazing user experience to this boring web3 world',
  description:
    '',
  keywords: [
    'Wallet Guardian',
    'Wallet',
    'Guardian',
  ],
  authors: [{ name: 'Wallet Guardian', url: siteUrl }],
  creator: 'Shivam Gupta',
  publisher: 'Wallet Guardian',
  applicationName: 'Wallet Guardian',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/ico' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/ico' },
      { url: '/favicon.ico', sizes: '96x96', type: 'image/ico' },
    ],
    apple: [
      { url: '/favicon.ico', sizes: '57x57', type: 'image/ico' },
      { url: '/favicon.ico', sizes: '60x60', type: 'image/ico' },
      { url: '/favicon.ico', sizes: '72x72', type: 'image/png' },
      { url: '/favicon.ico', sizes: '76x76', type: 'image/ico' },
      { url: '/favicon.ico', sizes: '114x114', type: 'image/ico' },
      { url: '/favicon.ico', sizes: '120x120', type: 'image/png' },
      { url: '/favicon.ico', sizes: '144x144', type: 'image/ico' },
      { url: '/favicon.ico', sizes: '152x152', type: 'image/ico' },
      { url: '/favicon.ico', sizes: '180x180', type: 'image/ico' },
    ],
    shortcut: '/favicon.ico',
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.ico',
        color: '#000000',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Wallet Guardian - A Wallet to give amazing user experience to this boring web3 world',
    description:
      'Give amazing user experience to this boring web3 world with Wallet Guardian.',
    siteName: 'Wallet Guardian',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Wallet Guardian - A Wallet to give amazing user experience to this boring web3 world',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallet Guardian - A Wallet to give amazing user experience to this boring web3 world',
    description:
      'Give amazing user experience to this boring web3 world with Wallet Guardian.',
    site: '@celesops',
    creator: '@celesops',
    images: [
      {
        url: '/og-image.webp',
        alt: 'Wallet Guardian - A Wallet to give amazing user experience to this boring web3 world',
        type: 'image/webp',
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'x-default': siteUrl,
    },
  },
  category: 'Technology',
  classification: 'Wallet',
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark light',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Wallet Guardian',
    'application-name': 'Wallet Guardian',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
};

// Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Wallet Guardian',
  description:
    'Give amazing user experience to this boring web3 world with Wallet Guardian.',
  url: siteUrl,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Cloud',
  publisher: {
    '@type': 'Organization',
    name: 'Wallet Guardian',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/favicon.ico`,
    },
  },
  genre: [
    'Wallet',
    'Web3',
    'Blockchain',
    'Ethereum',
    'Solana',
    'Blockchain Development',
    'Blockchain Development',
  ],
  inLanguage: 'en-US',
  audience: {
    '@type': 'SoftwareEngineerAudience',
    audienceType: 'Web3 Engineers, Solana, Blockchain Developers',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Provider>
          <ScrollingProvider>
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          </ScrollingProvider>
        </Provider>
      </body>
    </html>
  );
}
