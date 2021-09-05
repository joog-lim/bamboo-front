const AlgorithmStateTypeObject = {
  ACCEPTED: "ACCEPTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  DELETED: "DELETED",
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
