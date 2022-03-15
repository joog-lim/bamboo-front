import React, { useState } from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { GoogleLogin } from "react-google-login";
import { hasTokenState } from "recoil/atom";
import s from "./loginModal.module.scss";
import useLogin, { customStyles } from "./loginContainer";
import modalController from "../modal";
import SpinnerBar from "components/spinner/spinnerPresenter";
import { loadingState } from "recoil/atom";

const LoginModal: React.FC = () => {
  const [{ isLogin }, setHasToken] = useRecoilState(hasTokenState);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const tryLogin = useLogin(closeModal, setIsLoading);

  const onClick = () => {
    if (isLogin) {
      setHasToken({ isAdmin: false, isLogin: false });
      localStorage.setItem("isAdmin", "false");
      localStorage.removeItem("token");
    } else {
      openModal();
    }
  };

  const onSuccessGoogle = (response: any) => {
    setIsLoading(true);
    tryLogin(response.tokenId);
  };

  const onFailureGoogle = (response: any) => {
    alert("구글 로그인에 실패하였습니다." + response);
  };

  return (
    <>
      <button onClick={onClick}>{isLogin ? "로그아웃" : "로그인"}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Login Modal"
      >
        {isLoading && <SpinnerBar background={true} />}
        <h1 className={s.h1}>로그인하기</h1>
        <h2 className={s.h2}>학교 계정으로 로그인해주세요!</h2>
        <GoogleLogin
          clientId="957329737930-eb08rfsefqr3es8q8kd9j5ncg9s3r9vh.apps.googleusercontent.com"
          buttonText="SIGN IN WITH GOOGLE"
          onSuccess={onSuccessGoogle}
          onFailure={onFailureGoogle}
          cookiePolicy={"single_host_origin"}
          className={s.googleLoginBtn}
        />
        <hr />
      </Modal>
    </>
  );
};

export default LoginModal;
