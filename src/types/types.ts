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

const EmojiTypeObject = {
  THUMBSUP: "thumbsup",
  THUMBSDOWN: "thumbsdown",
} as const;

export type EmojiType = typeof EmojiTypeObject[keyof typeof EmojiTypeObject];
