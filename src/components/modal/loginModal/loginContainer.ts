import { useState } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { Styles } from "react-modal";

import { isAdminState } from "recoil/atom";
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
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState);

  const tryLogin = async () => {
    const res = await auth.login(password);
    setIsLoading(false);
    if (res) {
      setIsAdmin(res.data.success);
      if (res.data.success) {
        window.localStorage.setItem("token", res.data.token);
        alert("성공적으로 로그인되었습니다.");
      }
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
    closeModal();
  };

  return [setPassword, tryLogin];
};

export const googleLogin = (closeModal: () => void) => {
  return async (token: string) => {
    window.localStorage.setItem("token", token);
    try {
      const res = await auth.GoogleLogin();
      console.log(res);
      alert("로그인 토큰 넘김");
      closeModal();
    } catch {
      alert("실패");
    }
  };
};

export default useLogin;
