"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import config from "@/config";
import { api } from "@/lib/axios";
import { getProfileClient } from "@/lib/client/profile";
import {
  forgotPasswordSchema,
  TForgotPassword,
} from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, GalleryVerticalEnd, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInput } from "../forms/form-input";
import { customToast } from "../shared/custom-toast";

function ForgotPasswordForm() {
  const [submitting, setSubmitting] = useState<boolean>(false);
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

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: TForgotPassword) {
    setSubmitting(true);

    try {
      await api.post(`/api/forgot-password`, values);

      customToast(
        "success",
        "Email terkirim",
        "Silahkan cek email anda untuk mendapatkan tautan reset password",
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

          <div className="mt-6">
            <h3 className="flex items-center justify-center text-xl font-bold md:text-2xl">
              Lupa Password
            </h3>
            <p className="text-muted-foreground text-center text-xs md:text-sm">
              Masukkan email Anda untuk menerima tautan pengaturan ulang kata
              sandi.
            </p>
          </div>
        </section>
        <FormInput
          control={form.control}
          name="email"
          label="Email"
          prefixIcon={Mail}
          placeholder="nama@email.com"
        />
        <Button
          type="submit"
          disabled={submitting}
          className="bg-primary hover:bg-primary/70 mt-2 w-full text-white"
        >
          {submitting ? "Mengirimkan.." : "Kirim Email"}
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

export default ForgotPasswordForm;
