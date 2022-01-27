export interface errRes {
  success?: boolean;
  message?: string;
}

export interface defaultResponese<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
}

// algorithm

export interface defaultAlgorithm {
  title?: string;
  content?: string;
  tag?: string;
}

export interface algorithm extends defaultAlgorithm {
  createdAt: number;
  id: string;
  number: number;
  status: string;
  reason?: string;
}

export interface getPostRes {
  posts: algorithm[];
  cursor: number;
  hasNext: boolean;
}

// create algorithm

export interface createAlgorithmReq extends defaultAlgorithm {
  verifier: { id: string; answer: string };
}

export interface createAlgorithmRes extends errRes {
  id?: number;
}

// delete algorithm

export interface deleteRes {
  reason: string;
}

export interface deleteReq extends defaultAlgorithm {
  createdAt: number;
  status: string;
  _id: string;
  number: number;
  updatedAt: string;
  __v: number;
  reason: string;
  cursorId: string;
  id: string;
}

// status algorithm

export interface setStatusReq {
  status: number;
}

export interface setStatusRes extends errRes, defaultAlgorithm, setStatusReq {
  beforeStatus?: string;
  afterStatus?: string;
}

// modify algorithm

export interface modifyReq {
  title: string;
  content: string;
  tag: string;
}

export interface modifyRes extends errRes {
  createdAt?: number;
  title?: string;
  status?: string;
  _id?: string;
  content?: string;
  tag?: string;
  number?: number;
  updatedAt?: string;
  __v?: number;
  reason?: string;
  cursorId?: string;
  id?: string;
}

//report algorithm

export interface reportReq {
  reason: string;
}

export interface reportRes {
  createdAt: number;
  title: string;
  status: string;
  _id: string;
  content: string;
  tag: string;
  number: number;
  updatedAt: string;
  __v: number;
  reason: string;
  cursorId: string;
  id: string;
}

// count algorithm

export interface getCount {
  _id: string;
  count: number;
}

// auth

export interface authReq {
  googleToken: string;
}

export interface authRes {
  accessToken: string;
  refreshToken: string;
}

// verity

export interface verify {
  id: string;
  question: string;
}

// emoji

export interface emojiReq {
  num: number;
}

export interface emojiRes {
  leaf: number;
  message: string;
}
