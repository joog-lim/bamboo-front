import { authController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";
import { AxiosResponse } from "axios";
import { authRes, logoutRes } from "types/api";

class Auth {
  loginByPassword(password: string): Promise<void | AxiosResponse<authRes>> {
    try {
      const data = {
        password,
      };
      return RequestApiV2({
        url: authController.login(),
        method: "POST",
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  GoogleLogin(): Promise<void | AxiosResponse<authRes>> {
    try {
      return RequestApiV2({
        url: authController.googleLogin(),
        method: "POST",
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  logout(): Promise<void | AxiosResponse<logoutRes>> {
    try {
      return RequestApiV2({
        url: authController.logout(),
        method: "POST",
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new Auth();
