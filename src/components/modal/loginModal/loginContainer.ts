import { useState } from "react";
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

export const adminText: string = "관리자님 환영합니다!";
export const userText: string = "학교 계정으로 로그인해주세요!";

const useLogin = (
  closeModal: () => void,
  setIsLoading: SetterOrUpdater<boolean>
) => {
  const [password, setPassword] = useState("");
  const [_, setIsLogin] = useRecoilState(hasTokenState);

  const tryLogin = async () => {
    const res = await auth.loginByPassword(password);
    setIsLoading(false);
    if (res) {
      setIsLogin({ isAdmin: res.data.success, isLogin: res.data.success });
      localStorage.setItem("isAdmin", "true");
      if (res.data.success) {
        window.localStorage.setItem("token", res.data.token);
      }
    }
    closeModal();
  };

  return [setPassword, tryLogin];
};

export const useGoogleLogin = (
  closeModal: () => void,
  setIsLoading: SetterOrUpdater<boolean>
) => {
  const [_, setIsLogin] = useRecoilState(hasTokenState);

  return async (token: string) => {
    window.localStorage.setItem("token", token);
    try {
      const res = await auth.GoogleLogin();
      window.localStorage.setItem("token", res?.data.token || "");
      setIsLogin({ isAdmin: false, isLogin: true });
      setIsLoading(false);
      closeModal();
    } catch {
      alert("로그인에 실패하였습니다\n학교 계정인 지 확인하여주세요.");
    }
  };
};

export default useLogin;
