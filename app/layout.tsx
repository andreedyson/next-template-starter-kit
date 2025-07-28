import AuthProvider from "@/auth-provider";
import { ThemeProvider } from "@/components/theme-providers";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { generateMetadata } from "@/lib/seo";

/**
 * ⚠️ Application Font
 * Replace this fonts variable with your preferred
 * font that will be applied towards the whole application.
 */
const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.className}`}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
