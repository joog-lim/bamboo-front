import { SetterOrUpdater, useSetRecoilState } from "recoil";
import { Styles } from "react-modal";

import { userStateState } from "recoil/atom";
import auth from "utils/api/auth";

export const customStyles: Styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 123px",
    overflow: "hidden",
  },
};

export const WELCOME_ADMIN_TEXT = "관리자님 환영합니다!";
export const WELCOME_USER_TEXT = "학교 계정으로 로그인해주세요!";

const useLogin = (
  closeModal: () => void,
  setIsLoading: SetterOrUpdater<boolean>
) => {
  const setUserState = useSetRecoilState(userStateState);

  return async (token: string) => {
    window.localStorage.setItem("token", token);
    try {
      const res = await auth.login();
      window.localStorage.setItem("token", res?.data.data.accessToken || "");
      window.localStorage.setItem(
        "refreshToken",
        res?.data.data.refreshToken || ""
      );
      setUserState(res?.data.data.isAdmin ? "ADMIN" : "USER");
      setIsLoading(false);
      closeModal();
      localStorage.setItem("isAdmin", res?.data.data.isAdmin);
    } catch {
      alert("로그인에 실패하였습니다\n학교 계정인 지 확인하여주세요.");
    }
  };
};

export default useLogin;
