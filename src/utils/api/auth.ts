import { authController } from "../libs/requestUrls";
import RequestApi from "../libs/requestApi";

class Auth {
  async login(password: string) {
    try {
      const data = {
        password,
      };
      return await RequestApi({
        url: authController.login(),
        method: "POST",
        data: data,
      });
    } catch (e) {
      if (e.message === "Request failed with status code 400") {
        return false;
      }
      throw new Error(e);
    }
  }
}

export default new Auth();
