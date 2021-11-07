import { emojiController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";
import { EmojiType } from "types/types";
import { AxiosResponse } from "axios";
import { emojiRes } from "types/api";

class Emoji {
  getEmoji(emoji: number): Promise<void | AxiosResponse<emojiRes>> {
    try {
      return RequestApiV2({
        url: emojiController.getEmogi(emoji),
        method: "GET",
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  addEmoji(
    isLogin: boolean,
    emoji: EmojiType,
    number: number
  ): Promise<void | AxiosResponse<emojiRes>> {
    const data = {
      num: number,
    };
    try {
      return RequestApiV2({
        url: emojiController.updateEmogi(emoji),
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
    emoji: EmojiType,
    number: number
  ): Promise<void | AxiosResponse<emojiRes>> {
    const data = {
      num: number,
    };
    try {
      return RequestApiV2({
        url: emojiController.updateEmogi(emoji),
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
