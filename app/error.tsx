"use client";

import { Button } from "@/components/ui/button";
import config from "@/config";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function CustomErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (error) {
      console.error("Error caught by error.tsx:", error);
    }
  }, [error]);

  return (
    <section className="bg-background text-base-content relative flex h-screen w-full flex-col items-center justify-center gap-4 p-2 md:p-10">
      {/* Illustration */}
      <div>
        <Image
          src="/assets/pages/error-illustration.svg"
          width={400}
          height={400}
          alt="Not Found Illustration"
          priority
        />
      </div>

      {/* Error Text */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-400 md:text-3xl">
          Something went wrong 🥲
        </h1>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn&apos;t process your request. <br />
          Please try again or return to the homepage.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <Button onClick={reset} variant="outline">
          Try Again
        </Button>
        <Link href={config.appURL} passHref>
          <Button variant="link" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Go back to Home Page
          </Button>
        </Link>
      </div>
    </section>
  );
}
