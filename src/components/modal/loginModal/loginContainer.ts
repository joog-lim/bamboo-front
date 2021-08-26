import { useState } from "react";
import { useRecoilState } from "recoil";

import { isAdminState } from "recoil/atom";
import auth from "utils/api/auth";

export const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 123px",
  },
};

const useLogin = () => {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState);

  const tryLogin = async () => {
    const res = await auth.login(password);
    if (res) {
      setIsAdmin(res.data.success);
      if (isAdmin) {
        window.localStorage.setItem("token", res.data.token);
        alert("성공적으로 로그인되었습니다.");
      }
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return [setPassword, tryLogin];
};

export default useLogin;
