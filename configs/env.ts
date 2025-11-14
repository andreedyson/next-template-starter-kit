import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["DEVELOPMENT", "PRODUCTION"]).default("DEVELOPMENT"),
  NEXT_PUBLIC_API_URL: z.string(),
  // Add other environment variables
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid frontend env vars", parsed.error.format());
  throw new Error("Missing or invalid env");
}

export const env = parsed.data;
