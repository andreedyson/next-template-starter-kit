import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z.string({ message: "DATABASE URL is required" }),
  DIRECT_URL: z.string().optional(), // If you use Supabase
  NEXT_PUBLIC_API_URL: z.string(),
  NEXTAUTH_SECRET: z
    .string()
    .min(10, "NEXTAUTH_SECRET must be at least 10 characters"),
  // Add other environment variables
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid frontend env vars", parsed.error.format());
  throw new Error("Missing or invalid env");
}

export const env = parsed.data;
