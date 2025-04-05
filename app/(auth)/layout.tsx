import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "TechDome",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
