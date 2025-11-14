"use client";

import config from "@/config";
import { api, APIResponse } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd, Loader2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getProfileClient } from "@/lib/client/profile";
import { customToast } from "../shared/custom-toast";

type VerifyResponse = APIResponse<null>;

export default function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState<boolean | null>(null);
  const session = getProfileClient();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  useEffect(() => {
    async function verify() {
      if (!token) {
        setSuccess(false);
        setLoading(false);
        return;
      }
      try {
        await api.get<VerifyResponse>(`/api/verify-email?token=${token}`);
        setSuccess(true);
        customToast("success", "Email berhasil diverifikasi");
      } catch {
        setSuccess(false);
        customToast(
          "error",
          "Verifikasi gagal",
          "Token tidak valid atau sudah digunakan",
        );
      } finally {
        setLoading(false);
      }
    }
    verify();
  }, [token]);

  return (
    <>
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
        <h2 className="mt-2 text-2xl font-bold">Verifikasi Email 📩</h2>
        <p className="text-muted-foreground text-sm">
          Kami sedang memproses verifikasi akun kamu...
        </p>
      </section>

      <div className="mt-8 flex flex-col items-center justify-center space-y-4">
        {loading && (
          <>
            <Loader2 className="text-primary h-10 w-10 animate-spin" />
            <p className="text-muted-foreground text-sm">
              Sedang memverifikasi...
            </p>
          </>
        )}

        {!loading && success && (
          <div className="flex flex-col items-center space-y-4">
            {/* Success Icon */}
            <div className="flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-green-100 text-green-600 shadow-md">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <p className="text-lg font-semibold">
              Email kamu berhasil diverifikasi 🎉
            </p>
            <Button
              onClick={() => router.push("/sign-in")}
              className="w-full font-semibold"
            >
              Masuk Sekarang
            </Button>
          </div>
        )}

        {!loading && success === false && (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-red-100 text-red-600 shadow-md">
              ✖
            </div>
            <p className="text-lg font-semibold">Verifikasi gagal 😢</p>
            <p className="text-muted-foreground text-sm">
              Token tidak valid atau sudah digunakan. Coba minta link baru.
            </p>
            <Button
              onClick={() => router.push("/resend-email")}
              className="w-full font-semibold"
              variant="outline"
            >
              Kirim Ulang Link
            </Button>
          </div>
        )}
      </div>

      <p className="text-muted-foreground mt-6 text-center text-xs">
        © {new Date().getFullYear()} {config.appName}
      </p>
    </>
  );
}
