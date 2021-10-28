import { emojiController } from "../libs/requestUrls";
import RequestApiV2 from "../libs/requestApi";
import { EmojiType } from "src/types/types";

class Emoji {
  getEmoji(emoji: number) {
    try {
      return RequestApiV2({
        url: emojiController.getEmogi(emoji),
        method: "GET",
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }

  addEmoji(isLogin: boolean, emoji: EmojiType, number: number) {
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

  deleteEmoji(isLogin: boolean, emoji: EmojiType, number: number) {
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
