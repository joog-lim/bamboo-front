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

export default useLogin;
