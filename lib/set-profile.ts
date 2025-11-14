import Cookies from "js-cookie";
import { IUserLogin } from "./profile";
import { DEFAULT_KEY } from "../constants";

export const setProfile = (data: IUserLogin, key: string = DEFAULT_KEY) => {
  const expires = new Date(data.exp * 1000);
  Cookies.set(key, JSON.stringify(data), { expires, path: "/" });
};
