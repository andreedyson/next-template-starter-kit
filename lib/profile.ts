"use server";

import { cookies } from "next/headers";
import { DEFAULT_KEY } from "../constants";
import { UserRole } from "@/types/auth";

export interface IUserLogin {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  token: string;
  exp: number;
}

export const getProfile = async (
  key: string = DEFAULT_KEY,
): Promise<IUserLogin | undefined> => {
  const cookieStore = cookies();
  const cookie = (await cookieStore).get(key)?.value ?? "";

  try {
    return JSON.parse(cookie) as IUserLogin;
  } catch {
    return undefined;
  }
};

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(DEFAULT_KEY);

  return { success: true };
}
