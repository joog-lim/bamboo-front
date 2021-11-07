import { verifyController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";
import { AxiosResponse } from "axios";
import { verify } from "types/api";

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
