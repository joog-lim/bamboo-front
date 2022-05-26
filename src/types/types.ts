const AlgorithmStateTypeObject = {
  ACCEPTED: "ACCEPTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  REPORTED: "REPORTED",
} as const;

export type AlgorithmListStateType =
  typeof AlgorithmStateTypeObject[keyof typeof AlgorithmStateTypeObject];

export type UserStateType = "GUEST" | "USER" | "ADMIN";
