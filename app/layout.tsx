import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solutions Africa - Premium Real Estate Across Africa",
  description: "Discover premium real estate opportunities across Africa. From luxury villas to modern apartments, find your dream property with Solutions Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,77,62,0.15),transparent_50%)] pointer-events-none z-0"></div>
        <div className="fixed inset-0 bg-[linear-gradient(to_bottom_right,rgba(26,77,62,0.1),transparent_50%)] pointer-events-none z-0"></div>
        <div className="relative z-10">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
