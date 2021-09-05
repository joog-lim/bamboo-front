import { BASE_URL, BASE_URLV2 } from "constants/config.json";
import axios, { AxiosRequestConfig } from "axios";

const RequestApi = (p: AxiosRequestConfig) => {
  try {
    const res = axios({
      method: p.method,
      baseURL: BASE_URLV2,
      url: p.url,
      data: p.data,
      headers: p.headers
        ? { Authorization: localStorage.getItem("token") }
        : null,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export const RequestApiV2 = (p: AxiosRequestConfig) => {
  try {
    const res = axios({
      method: p.method,
      baseURL: BASE_URLV2,
      url: p.url,
      data: p.data,
      headers: p.headers
        ? { Authorization: localStorage.getItem("token") }
        : null,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export default RequestApi;
