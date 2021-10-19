import { atom } from "recoil";
import { AlgorithmType } from "types/types";

export const isAdminState = atom<boolean>({
  key: "isAdminState",
  default: false,
});

export const algorithmFilterState = atom<AlgorithmType>({
  key: "algorithmFilterState",
  default: "ACCEPTED",
});

export const loadingState = atom<boolean>({
  key: "loadingState",
  default: false,
});
