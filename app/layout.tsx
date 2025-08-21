import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  heroImg,
  logo,
  favicon16,
  favicon32,
  appleFavicon,
  androidChrome192,
  androidChrome521,
} from "@/public/assets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rational IT Services - AI Solutions & Digital Transformation",
  description:
    "Rational IT Services helps businesses unlock growth, efficiency, and innovation by integrating AI-powered solutions tailored to your needs.",
  keywords: [
    "AI solutions",
    "digital transformation",
    "business growth",
    "technology consulting",
    "Rational IT Services",
    "AI-powered software",
  ],
  authors: [{ name: "Rational IT Services", url: "https://rationalitservices.com" }],
  icons: {
    icon: [
      { url: favicon16.src, type: "image/png", sizes: "16x16" },
      { url: favicon32.src, type: "image/png", sizes: "32x32" },
    ],
    apple: appleFavicon.src,
    other: [
      { rel: "android-chrome-192x192", url: androidChrome192.src, type: "image/png", sizes: "192x192" },
      { rel: "android-chrome-512x512", url: androidChrome521.src, type: "image/png", sizes: "512x512" },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://rationalitservices.com",
    title: "Rational IT Services - AI Solutions & Digital Transformation",
    description:
      "Rational IT Services helps businesses unlock growth, efficiency, and innovation by integrating AI-powered solutions tailored to your needs.",
    images: [
      {
        url: heroImg.src,
        width: 1200,
        height: 630,
        alt: "Rational IT Services Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rational IT Services - AI Solutions & Digital Transformation",
    description:
      "Rational IT Services helps businesses unlock growth, efficiency, and innovation by integrating AI-powered solutions tailored to your needs.",
    images: [heroImg.src],
    creator: "@RationalIT",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
