import { authController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";
import { AxiosResponse } from "axios";
import { authRes } from "types/api";

class Auth {
  async login(password: string): Promise<void | AxiosResponse<authRes>> {
    try {
      const data = {
        password,
      };
      return await RequestApiV2({
        url: authController.login(),
        method: "POST",
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async GoogleLogin(): Promise<void | AxiosResponse<authRes>> {
    try {
      return await RequestApiV2({
        url: authController.googleLogin(),
        method: "POST",
        canHeader: true,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new Auth();
