const AlgorithmStateTypeObject = {
  ACCEPTED: "ACCEPTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  REPORTED: "REPORTED",
} as const;

export type AlgorithmType = typeof AlgorithmStateTypeObject[keyof typeof AlgorithmStateTypeObject];

export interface hasToken {
  isLogin: boolean;
  isAdmin: boolean;
}
