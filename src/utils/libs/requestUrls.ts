//알고리즘 관리
export const algorithmController = {
  createAlgorithm: () => {
    return `/algorithm/`;
  },
  getAlgorithm: (cursor: number | string, status: string) => {
    return `/algorithm/list/cursor/?count=15&criteria=${cursor}&status=${status}`;
  },
  deleteAlgorithm: (id: string) => {
    return `/algorithm/${id}`;
  },
  modifyAlgorithm: (id: string) => {
    return `/algorithm/${id}`;
  },
  reportAlgorithm: (id: string) => {
    return `/algorithm/${id}/report`;
  },
  setStatusAlgorithm: (id: string) => {
    return `/algorithm/${id}/status`;
  },
};

//계정
export const authController = {
  login: () => {
    return `/login`;
  },
  token: () => {
    return `/token`;
  },
};

//이모지
export const emojiController = {
  updateEmoji: () => {
    return `/leaf/`;
  },
};

//확인
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
