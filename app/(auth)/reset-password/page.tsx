import ResetPasswordForm from "@/components/auth/reset-password-form";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Reset Password Akun Anda",
  description:
    "Silahkan lakukan request email untuk merubah akun password anda",
});

export default function ResetPasswordPage() {
  return (
    <div className="mx-auto my-20 w-full max-w-md">
      <ResetPasswordForm />
    </div>
  );
}
