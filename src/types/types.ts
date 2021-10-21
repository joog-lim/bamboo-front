const AlgorithmStateTypeObject = {
  ACCEPTED: "ACCEPTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  DELETED: "DELETED",
} as const;

export type AlgorithmType = typeof AlgorithmStateTypeObject[keyof typeof AlgorithmStateTypeObject];

export interface isLogin {
  isLogin: boolean;
  isAdmin: boolean;
}
