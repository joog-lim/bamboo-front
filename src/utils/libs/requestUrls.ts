//알고리즘 관리
export const postController = {
  getPost: (cursor: number | string, status: string) => {
    return `/post/AlgorithemList?count=15&cursor=${cursor}&status=${status}`;
  },
  createPost: () => {
    return `/post/create`;
  },
  deletePost: (id: string) => {
    return `/post/${id}/delete`;
  },
  modifyPost: (id: string) => {
    return `/post/${id}/modify`;
  },
  reportPost: (id: string) => {
    return `/post/${id}/report`;
  },
  setStatusPost: (id: string) => {
    return `/post/${id}/setStatus`;
  },
};

//관리자
export const authController = {
  login: () => {
    return `/auth/`;
  },
};

//확인
export const verifyController = {
  getQuestion: () => {
    return `/verify/`;
  },
};
