import axios, { AxiosRequestConfig } from "axios";
import errHandler from "./error";

export interface requestApiV2DTO extends AxiosRequestConfig {
  canHeader?: boolean;
}
const RequestApiV2 = (p: requestApiV2DTO) => {
  try {
    const res = axios({
      method: p.method,
      baseURL: "https://server.joog-lim.info/apiV3/test",
      url: p.url,
      data: p.data,
      headers: Object.assign(
        {},
        p.canHeader
          ? { Authorization: localStorage.getItem("token") ?? "" }
          : {},
        p.headers
      ),
    }).catch((err) => {
      errHandler(err);
    });
    return res;
  } catch (err: any) {
    throw err;
  }
};

export default RequestApiV2;
