// types/next-auth.d.ts
import type { DefaultUser } from "next-auth";
import type { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    role: string | null;
    image: string | null;
    createdAt: Date | string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: string | null;
    image: string | null;
    createdAt: Date | string;
  }
}
