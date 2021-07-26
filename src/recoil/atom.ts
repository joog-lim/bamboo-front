import { atom } from "recoil";
import { AlgorithmType } from "types/types";

export const isAdminState = atom<boolean>({
  key: "pageState",
  default: false,
});

export const algorithmState = atom<AlgorithmType>({
  key: "algorithmState",
  default: "accept",
});
