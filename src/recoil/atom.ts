import { atom } from "recoil";
import { Algorithm } from "types/api";
import { AlgorithmListStateType, UserStateType } from "types/types";

export const userStateState = atom<UserStateType>({
  key: "userStateState",
  default: "GUEST",
});

export const algorithmListFilterState = atom<AlgorithmListStateType>({
  key: "algorithmListFilterState",
  default: "ACCEPTED",
});

export const algorithmListState = atom<Algorithm[]>({
  key: "algorithmListState",
  default: [
    {
      algorithmNumber: 0,
      createdAt: 0,
      idx: 0,
      isEmoji: [],
      emojiCount: 0,
      isClicked: false,
    },
  ],
});

export const isLoadingState = atom<boolean>({
  key: "isLoadingState",
  default: false,
});
