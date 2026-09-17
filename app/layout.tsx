import type { Metadata, Viewport } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Providers } from "./providers/Providers";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

// Load Poppins font
const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammadjunaid-swe.vercel.app'),
  title: 'Muhammad Junaid Farooq — Portfolio',
  description: "I'm Muhammad Junaid Farooq, an AI/ML Engineer and Software Engineering graduate with a strong foundation in full-stack development (MERN stack + Next.js), now expanding into AI/ML, Deep Learning, Generative AI, and Computer Vision.",
  authors: [{ name: "Muhammad Junaid Farooq" }],
  icons: {
    icon: '/images/orb.svg',
  },

  // TODO: /images/og-image.png does not exist yet — needs a real designed 1200x630
  // social-preview image (name, title, brand colors). Referenced below for OG/Twitter
  // cards; until it's added, link previews on social platforms will show a broken image.

  // Open Graph
  openGraph: {
    title: 'Muhammad Junaid Farooq — Portfolio',
    description: "I'm Muhammad Junaid Farooq, an AI/ML Engineer and Software Engineering graduate with a strong foundation in full-stack development (MERN stack + Next.js), now expanding into AI/ML...",
    url: 'https://muhammadjunaid-swe.vercel.app',
    siteName: "Muhammad Junaid Farooq's Portfolio",
    images: '/images/og-image.png',
    locale: 'en_US',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Junaid Farooq — Portfolio',
    description: "I'm Muhammad Junaid Farooq, an AI/ML Engineer and Software Engineering graduate with a strong foundation in full-stack development (MERN stack + Next.js), now expanding into AI/ML...",
    images: '/images/og-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-[var(--smoky-black)]`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}