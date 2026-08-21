import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { themeStorageKey } from "@/lib/theme";
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
  metadataBase: new URL("https://tally-design-docs.vercel.app/"),
  title: {
    default: "Tally UI Design System",
    template: "%s | Tally UI Design System",
  },
  description: "Documentation for the Tally UI Design System.",
};

type RootLayoutProps = {
  children: ReactNode;
};

const themeInitializationScript = `
  (() => {
    let theme = "light";

    try {
      const storedTheme = window.localStorage.getItem("${themeStorageKey}");
      if (storedTheme === "light" || storedTheme === "dark") {
        theme = storedTheme;
      }
    } catch {}

    document.documentElement.dataset.theme = theme;
  })();
`;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${crimsonPro.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
