import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import VerifyEmailContent from "@/components/auth/verify-email-content";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = generateMetadata({
  title: "Verifikasi Email",
  description: "Halaman verifikasi email",
});

export default function VerifyEmailPage() {
  return (
    <div className="mx-auto my-20 w-full max-w-lg rounded-xl border bg-white p-4 shadow-lg md:p-10 dark:bg-zinc-900">
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <Skeleton className="h-80 w-lg rounded-lg" />
          </div>
        }
      >
        <VerifyEmailContent />
      </Suspense>
    </div>
  );
}
