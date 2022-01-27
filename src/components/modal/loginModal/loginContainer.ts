import { SetterOrUpdater, useRecoilState } from "recoil";
import { Styles } from "react-modal";

import { hasTokenState } from "recoil/atom";
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

const useLogin = (
  closeModal: () => void,
  setIsLoading: SetterOrUpdater<boolean>
) => {
  const [_, setIsLogin] = useRecoilState(hasTokenState);

  return async (token: string) => {
    window.localStorage.setItem("token", token);
    try {
      const res = await auth.login();
      window.localStorage.setItem("token", res?.data.data.accessToken || "");
      window.localStorage.setItem(
        "refreshToken",
        res?.data.data.refreshToken || ""
      );
      setIsLogin({ isAdmin: res?.data.data.isAdmin, isLogin: true });
      setIsLoading(false);
      closeModal();
    } catch {
      alert("로그인에 실패하였습니다\n학교 계정인 지 확인하여주세요.");
    }
  };
};

export default useLogin;
