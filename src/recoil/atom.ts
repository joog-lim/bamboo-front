import { atom } from "recoil";
import { UserType, AlgorithmType } from "types/types";

export const pageState = atom<UserType>({
  key: "pageState",
  default: "user",
});

export const algorithmState = atom<AlgorithmType>({
  key: "algorithmState",
  default: "accept",
});
