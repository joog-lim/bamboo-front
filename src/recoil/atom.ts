import { atom } from "recoil";
import { algorithm } from "types/api";
import { AlgorithmType, hasToken } from "types/types";

export const hasTokenState = atom<hasToken>({
  key: "hasTokenState",
  default: {
    isLogin: false,
    isAdmin: false,
  },
});

export const algorithmFilterState = atom<AlgorithmType>({
  key: "algorithmFilterState",
  default: "ACCEPTED",
});

export const algorithmState = atom<algorithm[]>({
  key: "algorithmState",
  default: [
    { algorithmNumber: 0, createdAt: 0, idx: "", emojiis: [], emojiCount: 0 },
  ],
});

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
});

export const reLoadingState = atom<boolean>({
  key: "reLoadingState",
  default: false,
});
