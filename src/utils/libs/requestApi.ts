import { BASE_URL } from "constants/config.json";
import axios, { AxiosRequestConfig } from "axios";

export interface hasToken {
  hasToken?: boolean;
}

const RequestApi = (p: AxiosRequestConfig) => {
  try {
    // let header = Object.assign(BASE_HEADER, p.headers);
    const res = axios({
      method: p.method,
      baseURL: BASE_URL,
      url: p.url,
      data: p.data,
      headers: p.headers,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export default RequestApi;
