import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import config from "@/config";
import { getProfileClient } from "./client/profile";
import { customToast } from "@/components/shared/custom-toast";
import { clearSession } from "./profile";

export interface Paginate {
  page: number;
  limit: number;
  total_page: number;
  total_data: number;
}

export interface APIResponse<T = unknown> {
  message: string;
  data?: T;
  pagination?: Paginate;
}

export const baseURL = config.baseAPIUrl;

// === Request Interceptor ===
const attachAuthHeader = async (config: InternalAxiosRequestConfig) => {
  if (typeof window !== "undefined") {
    const session = getProfileClient();
    const token = session?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
};

const createSuccessHandler = (withToast = true) => {
  return function (response: AxiosResponse<APIResponse>) {
    if (response.status >= 200 && response.status < 300 && withToast) {
      customToast("success", response.data.message);
    }
    return response;
  };
};

const handleError = (error: AxiosError<APIResponse>) => {
  const response = error.response;

  if (response) {
    const status = response.status;
    const message = response.data?.message || `Error ${status}`;

    if (status === 401) {
      customToast("error", "Sesi kamu telah berakhir, silakan login kembali");
      clearSession();
      setTimeout(() => {
        window.location.href = "/login";
      }, 1200);
    } else {
      customToast("error", message);
    }
  } else {
    customToast("error", "Gagal terhubung ke server");
  }

  return Promise.reject(error);
};

const createAxiosInstance = (withToast = true): AxiosInstance => {
  const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use(attachAuthHeader);
  instance.interceptors.response.use(
    createSuccessHandler(withToast),
    handleError,
  );

  return instance;
};

export const api = createAxiosInstance(false);
export const apiToast = createAxiosInstance(true);
