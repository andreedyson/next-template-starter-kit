import { ThemeProvider } from "@/components/providers/theme-providers";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

/**
 * ⚠️ Application Font
 * Replace this fonts variable with your preferred
 * font that will be applied towards the whole application.
 */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
