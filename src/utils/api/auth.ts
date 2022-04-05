import { authController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";
import { AxiosResponse } from "axios";
import { authRes } from "types/api";

class Auth {
  login(): Promise<void | AxiosResponse> {
    try {
      return RequestApiV2({
        url: authController.login(),
        method: "POST",
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  tokenRefresh(): Promise<void | AxiosResponse> {
    try {
      return RequestApiV2({
        url: authController.token(),
        method: "POST",
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new Auth();
