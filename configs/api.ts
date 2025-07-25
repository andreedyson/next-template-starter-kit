import { API_URL } from "@/constants";

const apiConfig = {
  dev: {
    baseURL: API_URL,
  },
  production: {
    baseURL: "",
  },
};

export default apiConfig.dev;
