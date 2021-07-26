const AlgorithmTypeObject = {
  accept: "accept",
  pending: "pending",
  reject: "reject",
  requestDeleted: "requestDeleted",
} as const;

export type AlgorithmType =
  typeof AlgorithmTypeObject[keyof typeof AlgorithmTypeObject];
