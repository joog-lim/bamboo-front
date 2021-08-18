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
      throw new Error(e);
    }
  }
}

export default new Auth();
