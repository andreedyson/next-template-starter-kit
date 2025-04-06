import AuthProvider from "@/auth-provider";
import LandingHeader from "@/components/layout/LandingHeader";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Next.js boilerplate for website project.",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "max-w-[1920px] antialiased md:mx-[80px] lg:mx-[144px] 2xl:mx-auto"
      }
    >
      <AuthProvider>
        <LandingHeader />
        <div className="my-4 max-md:mx-4">{children}</div>
      </AuthProvider>
    </div>
  );
}
