const AlgorithmStateTypeObject = {
  accept: "accept",
  pending: "pending",
  reject: "reject",
  requestDeleted: "requestDeleted",
} as const;

export type AlgorithmType =
  typeof AlgorithmStateTypeObject[keyof typeof AlgorithmStateTypeObject];

export interface AlgorithmApi {
  content: string;
  createdAt: number;
  id: string;
  number: number;
  status: string;
  tag: string;
  title: string;
}
