import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string({ required_error: "Email perlu diisi" })
    .email({ message: "Email tidak valid" }),
  name: z
    .string({ required_error: "Nama perlu diisi" })
    .min(1, { message: "Nama minimal harus 1 karakter" })
    .max(100, { message: "Nama tidak bisa lebih dari 100 karakter" }),
  password: z
    .string()
    .min(8, { message: "Password minimal harus 8 karakter" })
    .max(32, { message: "Password tidak bisa lebih dari 32 karakter" }),
});

export const signInSchema = registerSchema.pick({
  email: true,
  password: true,
});

export const forgotPasswordSchema = registerSchema.pick({
  email: true,
});

export const resetPasswordSchema = registerSchema.pick({
  password: true,
});

export type TRegister = z.input<typeof registerSchema>;
export type TSignIn = z.infer<typeof signInSchema>;
export type TForgotPassword = z.infer<typeof forgotPasswordSchema>;
export type TResetPassword = z.infer<typeof resetPasswordSchema>;
