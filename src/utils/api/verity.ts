import { verifyController } from "../libs/requestUrls";
import RequestApi from "../libs/requestApi";

class Verify {
  async getQuestion() {
    try {
      return await RequestApi({
        url: verifyController.getQuestion(),
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new Verify();
