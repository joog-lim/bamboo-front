const UserTypeObject = {
  user: "user",
  admin: "admin",
} as const;

const AlgorithmTypeObject = {
  accept: "accept",
  pending: "pending",
  reject: "reject",
  requestDeleted: "requestDeleted",
} as const;

export type UserType = typeof UserTypeObject[keyof typeof UserTypeObject];

export type AlgorithmType =
  typeof AlgorithmTypeObject[keyof typeof AlgorithmTypeObject];
