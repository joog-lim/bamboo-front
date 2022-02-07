import { EmojiType } from "types/types";

//알고리즘 관리
export const algorithmController = {
  createAlgorithm: () => {
    return `/Algorithm/`;
  },
  getAlgorithm: (cursor: number | string, status: string) => {
    return `/Algorithm/list?count=15&cursor=${cursor}&status=${status}`;
  },
  deleteAlgorithm: (id: string) => {
    return `/Algorithm/${id}`;
  },
  modifyAlgorithm: (id: string) => {
    return `/Algorithm/${id}`;
  },
  reportAlgorithm: (id: string) => {
    return `/Algorithm/${id}/report`;
  },
  setStatusAlgorithm: (id: string) => {
    return `/Algorithm/${id}/status`;
  },
};

//계정
export const authController = {
  login: () => {
    return `/login`;
  },
  token: () => {
    return `/token`;
  },
};

//이모지
export const emojiController = {
  getEmoji: (emoji: number) => {
    return `/account/emoji?num=${emoji}`;
  },
  updateEmoji: (emoji: EmojiType) => {
    return `/account/emoji/${emoji}`;
  },
};

//확인
export const verifyController = {
  getQuestion: () => {
    return `/verify`;
  },
};

export const ruleController = {
  getRule: () => {
    return `/rule/web`
  }
};