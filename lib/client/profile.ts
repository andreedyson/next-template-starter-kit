import { DEFAULT_KEY } from "@/constants";
import { IUserLogin } from "../profile";

export const getProfileClient = (): IUserLogin | undefined => {
  if (typeof window === "undefined") return;

  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${DEFAULT_KEY}=`))
    ?.split("=")[1];

  if (!cookie) return;

  try {
    return JSON.parse(decodeURIComponent(cookie)) as IUserLogin;
  } catch {
    return undefined;
  }
};
