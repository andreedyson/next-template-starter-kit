"use client";

import config from "@/config";
import { FormInput } from "@/components/forms/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { APIResponse, apiToast } from "@/lib/axios";
import { getProfileClient } from "@/lib/client/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { GalleryVerticalEnd, Loader2, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const resendSchema = z.object({
  email: z.string().email({ message: "Masukkan alamat email yang valid" }),
});
type ResendInput = z.infer<typeof resendSchema>;

export default function ResendEmailContent() {
  const form = useForm<ResendInput>({
    resolver: zodResolver(resendSchema),
    defaultValues: { email: "" },
  });
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const session = getProfileClient();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  async function onSubmit(values: ResendInput) {
    try {
      setSuccess(true);
      await apiToast.post<APIResponse<null>>("/api/resend-verification", {
        email: values.email,
      });
    } catch {
      setSuccess(false);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="space-y-1 text-center">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 font-semibold"
          title={`${config.appName} Homepage`}
        >
          {config.appLogo ? (
            <div>Logo</div>
          ) : (
            <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
          )}
          {config.appName}
        </Link>
        <h2 className="mt-2 text-2xl font-bold">Kirim Ulang Verifikasi 📧</h2>
        <p className="text-muted-foreground text-sm">
          Masukkan email akun kamu untuk mendapatkan link verifikasi baru.
        </p>
      </section>

      {/* Form */}
      {!success ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-5"
          >
            <FormInput
              control={form.control}
              name="email"
              label="Email"
              prefixIcon={Mail}
              placeholder="nama@email.com"
            />

            <Button
              type="submit"
              className="w-full font-semibold"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {form.formState.isSubmitting ? "Mengirim..." : "Kirim Ulang Link"}
            </Button>

            <div className="flex flex-col items-center gap-2 md:flex-row">
              {/* Register Link */}
              <div className="text-center text-sm">
                Belum punya akun?{" "}
                <Link
                  href="/register"
                  className="text-primary font-semibold hover:underline"
                >
                  Daftar di sini
                </Link>
              </div>
              <div className="bg-muted-foreground h-3 w-0.5 max-md:hidden" />
              {/* Login Link */}
              <div className="text-center text-sm">
                Sudah punya akun?{" "}
                <Link
                  href="/sign-in"
                  className="text-primary font-semibold hover:underline"
                >
                  Masuk di sini
                </Link>
              </div>
            </div>
          </form>
        </Form>
      ) : (
        <div className="mt-10 flex flex-col items-center space-y-4">
          <div className="flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-green-100 text-green-600 shadow-md">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <p className="text-lg font-semibold">
            Link verifikasi berhasil dikirim! 🎉
          </p>
          <Button
            onClick={() => router.push("/sign-in")}
            className="w-full font-semibold"
          >
            Kembali ke Login
          </Button>
        </div>
      )}

      <p className="text-muted-foreground mt-6 text-center text-xs">
        © {new Date().getFullYear()} {config.appName}
      </p>
    </>
  );
}
