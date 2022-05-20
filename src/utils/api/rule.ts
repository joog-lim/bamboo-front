import { AxiosResponse } from "axios";
import RequestApiV2 from "../libs/requestApi";
import { ruleController } from "../libs/requestUrls";

class Rule {
  getRule(): Promise<void | AxiosResponse> {
    try {
      return RequestApiV2({
        url: ruleController.getRuleUrl(),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new Rule();
