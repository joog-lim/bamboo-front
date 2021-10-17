import { atom } from "recoil";
import { algorithm } from "types/api";
import { AlgorithmType } from "types/types";

export const isAdminState = atom<boolean>({
  key: "isAdminState",
  default: false,
});

export const algorithmFilterState = atom<AlgorithmType>({
  key: "algorithmFilterState",
  default: "ACCEPTED",
});

export const algorithmState = atom<algorithm[]>({
  key: "algorithmState",
  default: [{ number: 0, createdAt: 0, id: "", status: "" }],
});
