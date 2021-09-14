export interface errRes {
  success?: boolean;
  message?: string;
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
  status: string;
}

export interface setStatusRes extends errRes, defaultAlgorithm {
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
  password: string;
}

export interface authRes {
  success: boolean;
  token: string;
}

// verity

export interface verify {
  id: string;
  question: string;
}