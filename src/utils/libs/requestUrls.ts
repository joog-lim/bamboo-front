//알고리즘 관리
export const postController = {
  getPost: (cursor: string, status: string) => {
    console.log(cursor);
    return `/post/get-list?count=15&cursor=${cursor}&status=${status}`;
  },
  createPost: () => {
    return `/post/create`;
  },
  deletePost: (id: string) => {
    return `/post/delete/${id}`;
  },
  patchPost: (id: string) => {
    return `/post/patch/${id}`;
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
