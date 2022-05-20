import React, { useState } from "react";
import Modal from "react-modal";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { GoogleLogin } from "react-google-login";
import { userStateState } from "recoil/atom";
import s from "./loginModal.module.scss";
import useLogin, { customStyles } from "./loginContainer";
import modalController from "../modal";
import SpinnerBar from "components/spinner/spinnerPresenter";
import { isLoadingState } from "recoil/atom";
import {currentUserStateState} from "recoil/selectors";

const LoginModal: React.FC = () => {
  const setUserState = useSetRecoilState(userStateState);
	const {isGuest} = useRecoilValue(currentUserStateState);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);

  const tryLogin = useLogin(closeModal, setIsLoading);

  const onChangeLoginState = () => {
    if (!isGuest) {
      setUserState("GUEST");
      localStorage.setItem("isAdmin", "false");
      localStorage.removeItem("token");
    } else {
      openModal();
    }
  };

  const onSuccessGoogle = (response: any) => {
    setIsLoading(true);
    tryLogin(response.tokenId)
  };

  const onFailureGoogle = (response: { error: string }) => {
    alert("구글 로그인에 실패하였습니다. " + response.error);
  };

  return (
    <>
      <button onClick={onChangeLoginState}>{isGuest ? "로그인" : "로그아웃"}</button>
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
          clientId={process.env.NEXT_PUBLIC_APP_CLIENT_ID ?? ""}
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
