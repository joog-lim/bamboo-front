import React, { useState } from "react";
import Modal from "react-modal";
import { useRecoilValue } from "recoil";

import { isAdminState } from "recoil/atom";
import { Logo } from "src/assets/svg";
import s from "./loginModal.module.scss";
import useLogin, { customStyles } from "./loginContainer";
import modalController from "../modal";

const LoginModal: React.FC = () => {
  const isAdmin = useRecoilValue(isAdminState);

  const [setPassword, tryLogin] = useLogin();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

  const checkEnter = (e: { key: string }) => {
    if (e.key === "Enter") {
      tryLogin("");
    }
  };

  return (
    <>
      <button onClick={openModal}>{isAdmin ? "사용자" : "관리자"}</button>
      <Modal
        // appElement={document.getElementById("root")}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Login Modal"
      >
        <Logo />
        <h1 className={s.h1}>로그인하기</h1>
        <h2 className={s.h2}>관리자님 환영합니다!</h2>
        <input
          className={s.password}
          type="password"
          placeholder="비밀번호를 입력하세요."
          onChange={({ target: { value } }) => setPassword(value)}
          onKeyDown={checkEnter}
          autoFocus={true}
        />
        <button className={s.loginBtn} onClick={tryLogin}>
          로그인
        </button>
      </Modal>
    </>
  );
};

export default LoginModal;
