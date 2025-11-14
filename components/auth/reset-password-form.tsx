"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import config from "@/config";
import { getProfileClient } from "@/lib/client/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronLeft,
  Eye,
  EyeOff,
  GalleryVerticalEnd,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInput } from "../forms/form-input";
import { customToast } from "../shared/custom-toast";
import { api } from "@/lib/axios";
import {
  resetPasswordSchema,
  TResetPassword,
} from "@/validations/auth-validation";

function ResetPasswordForm() {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const session = getProfileClient();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      if (session.role === "ADMIN") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard");
      }
    }
  }, [session, router]);

  useEffect(() => {
    if (!token) {
      customToast("error", "Tautan reset tidak valid atau sudah kadaluarsa.");
      router.replace("/forgot-password");
    }
  }, [token, router]);

  const form = useForm<TResetPassword>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    setSubmitting(true);

    try {
      await api.post(`/api/reset-password?token=${token}`, {
        ...values,
        token,
      });

      customToast(
        "success",
        "Berhasil merubah password",
        "Silahkan login dengan password baru anda",
      );
      setSubmitting(false);
      router.refresh();
      router.replace("/sign-in");
    } catch {
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-background flex flex-col gap-4 rounded-md border px-12 py-8 shadow-md"
      >
        <section className="mb-2 text-center md:text-start">
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
          <p className="text-muted-foreground text-center text-xs md:text-sm">
            Silahkan masukkan password baru anda
          </p>
        </section>
        <FormInput
          control={form.control}
          name="password"
          label="Kata Sandi"
          prefixIcon={Lock}
          placeholder="Minimal 8 karakter"
          type={showPassword ? "text" : "password"}
          autoComplete="off"
          suffixIcon={showPassword ? EyeOff : Eye}
          onSuffixClick={() => setShowPassword((prev) => !prev)}
        />
        <Button
          type="submit"
          disabled={submitting}
          className="bg-primary hover:bg-primary/70 mt-2 w-full text-white"
        >
          {submitting ? "Merubah..." : "Reset Password"}
        </Button>
        <Link
          href={"/sign-in"}
          className="text-muted-foreground hover:text-muted-foreground/60 mt-4 flex items-center justify-center text-sm"
        >
          <ChevronLeft size={20} />
          Kembali ke Login
        </Link>
      </form>
    </Form>
  );
}

export default ResetPasswordForm;
