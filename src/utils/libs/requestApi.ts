import axios, { AxiosRequestConfig } from "axios";

export interface requestApiV2DTO extends AxiosRequestConfig {
  canHeader?: boolean;
}
const RequestApiV2 = (p: requestApiV2DTO) => {
  try {
    const res = axios({
      method: p.method,
      baseURL: process.env.NEXT_PUBLIC_APP_BASE_URLV2,
      url: p.url,
      data: p.data,
      headers: { Authorization: localStorage.getItem("token") ?? "" } ?? {},
    });
    return res;
  } catch (err: any) {
    throw err;
  }
};

export default RequestApiV2;
