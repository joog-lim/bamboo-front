import { EmojiType } from "types/types";

//알고리즘 관리
export const algorithmController = {
  getAlgorithm: (cursor: number | string, status: string) => {
    return `/Algorithm/AlgorithemList?count=15&cursor=${cursor}&status=${status}`;
  },
  createAlgorithm: () => {
    return `/Algorithm/create`;
  },
  deleteAlgorithm: (id: string) => {
    return `/Algorithm/${id}/delete`;
  },
  modifyAlgorithm: (id: string) => {
    return `/Algorithm/${id}/modify`;
  },
  reportAlgorithm: (id: string) => {
    return `/Algorithm/${id}/report`;
  },
  setStatusAlgorithm: (id: string) => {
    return `/Algorithm/${id}/setStatus`;
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
    return `/verify/`;
  },
};
