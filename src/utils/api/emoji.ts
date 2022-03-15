import { emojiController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";
import { AxiosResponse } from "axios";
import { emojiRes } from "types/api";

class Emoji {
  addEmoji(
    isLogin: boolean,
    number: number
  ): Promise<void | AxiosResponse<emojiRes>> {
    const data = {
      number: number,
    };
    try {
      return RequestApiV2({
        url: emojiController.updateEmoji(),
        method: "POST",
        canHeader: isLogin,
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  deleteEmoji(
    isLogin: boolean,
    number: number
  ): Promise<void | AxiosResponse<emojiRes>> {
    const data = {
      num: number,
    };
    try {
      return RequestApiV2({
        url: emojiController.updateEmoji(),
        method: "DELETE",
        canHeader: isLogin,
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new Emoji();
