import React, { useState } from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { GoogleLogin } from "react-google-login";

import { isLoginState } from "recoil/atom";
import s from "./loginModal.module.scss";
import useLogin, {
  customStyles,
  adminText,
  userText,
  googleLogin,
} from "./loginContainer";
import modalController from "../modal";
import SpinnerBar from "components/spinner/spinnerPresenter";
import { loadingState } from "recoil/atom";

const LoginModal: React.FC = () => {
  const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const [setPassword, tryLogin] = useLogin(closeModal, setIsLoading);
  const tryGoogleLogin = googleLogin(closeModal);

  const checkEnter = (e: { key: string }) => {
    if (e.key === "Enter") {
      tryLogin("");
    }
  };

  const onClick = () => {
    isLogin.isLogin
      ? setIsLogin({ isAdmin: false, isLogin: false })
      : openModal();
  };

  const loginClick = () => {
    setIsLoading(true);
    tryLogin("");
  };

  const onSuccessGoogle = (response: any) => {
    tryGoogleLogin(response.tokenId);
  };

  const onFailureGoogle = (response: any) => {
    alert("구글 로그인에 실패하였습니다." + response);
  };

  const onChangeState = () => {
    setIsAdminLogin(!isAdminLogin);
  };

  return (
    <>
      <button onClick={onClick}>
        {isLogin.isLogin ? "로그아웃" : "로그인"}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Login Modal"
      >
        {isLoading && <SpinnerBar background={true} />}
        <h1 className={s.h1}>로그인하기</h1>
        <h2 className={s.h2}>{isAdminLogin ? adminText : userText}</h2>
        {isAdminLogin ? (
          <>
            <input
              className={s.password}
              type="password"
              placeholder="비밀번호를 입력하세요."
              onChange={({ target: { value } }) => setPassword(value)}
              onKeyDown={checkEnter}
              autoFocus={true}
            />
            <button className={s.loginBtn} onClick={loginClick}>
              로그인
            </button>
            <hr />
            <button className={s.changeText} onClick={onChangeState}>
              또는 사용자 로그인
            </button>
          </>
        ) : (
          <>
            <GoogleLogin
              clientId="957329737930-eb08rfsefqr3es8q8kd9j5ncg9s3r9vh.apps.googleusercontent.com"
              buttonText="SIGN IN WITH GOOGLE"
              onSuccess={onSuccessGoogle}
              onFailure={onFailureGoogle}
              cookiePolicy={"single_host_origin"}
              className={s.googleLoginBtn}
            />
            <hr />
            <button className={s.changeText} onClick={onChangeState}>
              또는 관리자 로그인
            </button>
          </>
        )}
      </Modal>
    </>
  );
};

export default LoginModal;
