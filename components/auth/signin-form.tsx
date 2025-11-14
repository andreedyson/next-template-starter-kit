"use client";

import { Button } from "@/components/ui/button";
import config from "@/config";
import { api, APIResponse } from "@/lib/axios";
import { getProfileClient } from "@/lib/client/profile";
import { signInSchema, TSignIn } from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, GalleryVerticalEnd, Lock, Mail } from "lucide-react";
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
import { setProfile } from "@/lib/set-profile";
import { IUserLogin } from "@/lib/profile";

export function SignInForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const session = getProfileClient();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isSubmittingForm = form.formState.isSubmitting;

  useEffect(() => {
    const systemRole = session?.role;

    if (session && systemRole == "USER") {
      router.replace("/");
    }

    if (session && systemRole == "ADMIN") {
      router.replace("/dashboard");
    }
  }, [session, router]);

  async function onSubmit(values: TSignIn) {
    try {
      const res = await api.post<APIResponse<IUserLogin>>("/api/login", values);

      const user = res.data.data;

      if (!user) {
        customToast("error", res.data.message);
        return;
      }

      setProfile(user);
      customToast("success", "Berhasil Masuk");
      router.push("/");
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
            <h2 className="text-xl font-bold md:text-2xl">
              Selamat Datang Kembali 🙋‍♂️
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Masukkan data Anda untuk masuk ke aplikasi dan mulai memantau
              pengeluaran Anda dengan mudah.
            </p>
          </section>
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
          <Link
            href={"/forgot-password"}
            className="text-end text-sm font-semibold underline duration-200 hover:text-emerald-600"
          >
            Lupa Password
          </Link>
          <Button
            type="submit"
            disabled={isSubmittingForm}
            className="mt-2 w-full cursor-pointer"
          >
            {isSubmittingForm ? "Memproses..." : "Masuk"}
          </Button>

          <Link href={"/register"} className="mt-2 text-center text-sm">
            Tidak memiliki akun?{" "}
            <span className="text-primary font-semibold underline">Daftar</span>
          </Link>
          <div className="mt-3 text-center text-sm md:mt-10 md:text-start">
            <p>© 2025 {config.appName}</p>
          </div>
        </form>
      </Form>
    </div>
  );
}
