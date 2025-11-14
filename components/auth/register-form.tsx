"use client";

import { Button } from "@/components/ui/button";
import config from "@/config";
import { api, APIResponse } from "@/lib/axios";
import { generateMetadata } from "@/lib/seo";
import { registerSchema, TRegister } from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Eye,
  EyeOff,
  GalleryVerticalEnd,
  LetterText,
  Lock,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormInput } from "../forms/form-input";
import BackButton from "../shared/back-button";
import { customToast } from "../shared/custom-toast";
import { Form } from "../ui/form";
import { getProfileClient } from "@/lib/client/profile";

export const metadata = generateMetadata({
  title: "Daftarkan akun",
});

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const session = getProfileClient();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const systemRole = session?.role;

    if (session && systemRole == "USER") {
      router.replace("/");
    }

    if (session && systemRole == "ADMIN") {
      router.replace("/dashboard");
    }
  }, [session, router]);

  async function onSubmit(values: TRegister) {
    try {
      await api.post<APIResponse<TRegister>>("/api/register", values);

      customToast(
        "success",
        "Pendaftaran berhasil",
        "Silahkan verifikasi akun anda melalui email terdaftar.",
      );

      router.push("/sign-in");
    } catch {}
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <BackButton className="justify-start" />
          <section className="mb-2 flex flex-col items-center justify-center text-center">
            <Link
              href="/"
              className="jusce mb-2 flex items-center gap-2 font-semibold"
              title={`${config.appName} Homepage`}
            >
              {config.appLogo ? (
                <div>
                  <Image
                    src={config.appLogo}
                    alt={`${config.appName} Logo`}
                    className="w-8"
                    priority={true}
                    width={32}
                    height={32}
                  />
                </div>
              ) : (
                <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-4" />
                </div>
              )}
              {config.appName}
            </Link>
            <h2 className="text-xl font-bold md:text-2xl">Daftarkan akun 💸</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Silakan isi data berikut untuk membuat akun baru dan mulai
              mengelola mengelola keuangan anda.
            </p>
          </section>
          {/* Nama */}
          <FormInput
            control={form.control}
            name="name"
            label="Nama Lengkap"
            prefixIcon={LetterText}
            placeholder="Contoh: Dinan"
          />
          {/* Email */}
          <FormInput
            control={form.control}
            name="email"
            label="Email"
            prefixIcon={Mail}
            placeholder="nama@email.com"
          />
          {/* Password */}
          <FormInput
            control={form.control}
            name="password"
            label="Kata Sandi"
            prefixIcon={Lock}
            placeholder={showPassword ? "Minimal 8 karakter" : "******"}
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            suffixIcon={showPassword ? EyeOff : Eye}
            onSuffixClick={() => setShowPassword((prev) => !prev)}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="mt-2 w-full cursor-pointer"
          >
            {form.formState.isSubmitting ? "Memproses..." : "Daftar"}
          </Button>
          <Link href={"/sign-in"} className="mt-2 text-center text-sm">
            Sudah memiliki akun?{" "}
            <span className="text-main-500 font-semibold underline">
              Sign In
            </span>
          </Link>
          <div className="desc-2 mt-3 text-center text-sm md:mt-12 md:text-start">
            <p>© 2025 {config.appName}</p>
          </div>
        </form>
      </Form>
    </div>
  );
}
