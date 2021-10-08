import axios, { AxiosRequestConfig } from "axios";

const RequestApiV2 = (p: AxiosRequestConfig) => {
  try {
    console.log(process.env.NEXT_PUBLIC_APP_BASE_URLV2)
    const res = axios({
      method: p.method,
      baseURL: process.env.NEXT_PUBLIC_APP_BASE_URLV2,
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

export default RequestApiV2;
