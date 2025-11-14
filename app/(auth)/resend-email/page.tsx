import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import ResendEmailContent from "@/components/auth/resend-email-content";

export const metadata: Metadata = generateMetadata({
  title: "Kirim Ulang Verifikasi Email",
  description: "Halaman kirim ulang verifikasi email PEDI",
});

export default function ResendEmailPage() {
  return (
    <div className="mx-auto my-20 w-full max-w-lg rounded-xl border bg-white p-4 shadow-lg md:p-10 dark:bg-zinc-900">
      <ResendEmailContent />
    </div>
  );
}
