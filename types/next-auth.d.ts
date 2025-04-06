import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    role: string;
    createdAt: string | Date;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    createdAt: string | Date;
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role: string;
    createdAt: Date | string;
  }
}
