import { authController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";

class Auth {
  async login(password: string) {
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
      if (e.message === "Request failed with status code 400") {
        return false;
      }
      throw new Error(e);
    }
  }
}

export default new Auth();
