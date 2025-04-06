import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
          },
          success: {
            icon: "✅",
            style: {
              background: "#22c55e",
              color: "white",
            },
          },
          error: {
            style: {
              background: "#ef4444",
              color: "white",
            },
          },
        }}
      />
    </main>
  );
}
