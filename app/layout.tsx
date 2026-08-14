import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/inter-500.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/inter-600.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const crimsonPro = localFont({
  src: "./fonts/crimson-pro.ttf",
  weight: "200 900",
  style: "normal",
  variable: "--font-crimson-pro",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Tally UI Design System",
    template: "%s | Tally UI Design System",
  },
  description: "Documentation for the Tally UI Design System.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
