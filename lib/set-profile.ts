import { DEFAULT_KEY } from "../constants";
import { IUserLogin } from "./profile";

export const setProfile = (data: IUserLogin, key: string = DEFAULT_KEY) => {
  const expires = new Date(data.exp * 1000).toUTCString();

  document.cookie = `${key}=${encodeURIComponent(
    JSON.stringify(data),
  )}; Path=/; Expires=${expires}; SameSite=Lax; Secure`;
};
