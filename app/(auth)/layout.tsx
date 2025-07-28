import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import { generateMetadata } from "@/lib/seo";
import config from "@/config";

export const metadata: Metadata = generateMetadata({
  title: {
    template: `%s to ${config.appName}`,
    default: "Sign-in",
  },
});

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>{children}</div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
        }}
      />
    </div>
  );
}
