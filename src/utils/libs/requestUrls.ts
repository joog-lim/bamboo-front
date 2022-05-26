// 알고리즘 관리
export const algorithmController = {
  createAlgorithm: () => {
    return `/algorithm/`;
  },
  getAlgorithm: (cursor: number | string, status: string, isAdmin: boolean) => {
    return `/algorithm/list/cursor${
      isAdmin ? "/admin?" : "?"
    }count=15&criteria=${cursor}&status=${status}`;
  },
  deleteAlgorithm: (idx: number) => {
    return `/algorithm/information/${idx}`;
  },
  modifyAlgorithm: (idx: number) => {
    return `/algorithm/content/${idx}`;
  },
  setStatusAlgorithm: (idx: number) => {
    return `/algorithm/status/${idx}`;
  },
};

// 계정
export const authController = {
  login: () => {
    return `/login`;
  },
  token: () => {
    return `/token`;
  },
};

// 이모지
export const emojiController = {
  updateEmoji: () => {
    return `/leaf/`;
  },
};

// 확인
export const verifyController = {
  getQuestion: () => {
    return `/verify`;
  },
};

export const ruleController = {
  getRuleUrl: () => {
    return `algorithm/rule/web`;
  },
};
