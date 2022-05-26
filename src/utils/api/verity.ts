import { AxiosResponse } from "axios";
import { verify } from "types/api";
import { verifyController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";

class Verify {
  getQuestion(): Promise<void | AxiosResponse<verify>> {
    try {
      return RequestApiV2({
        url: verifyController.getQuestion(),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new Verify();
