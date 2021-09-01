import React, { useState } from "react";
import Modal from "react-modal";

import s from "./algorithmModal.module.scss";
import { customStyles, algorithmModalProps } from "./AlgorithmModalContainer";
import modalController from "../modal";

const AlgorithmModal: React.FC<algorithmModalProps> = (
  p: algorithmModalProps
) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

  const checkEnter = (e: { key: string }) => {
    if (e.key === "Enter") {
      p.enterEvent();
    }
  };

  return (
    <>
      <button onClick={openModal} className={p.isRed ? s.red : s.green}>
        {p.children}
      </button>
      <form>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Algorithm Modal"
        >
          <h1 className={p.isRed ? s.redH1 : s.greenH1}>{p.children}하기</h1>
          {p.isHeading ? (
            <input
              className={s.password}
              value={`알고리즘을 ${p.children}합니다`}
              onChange={({ target: { value } }) => p.setTitle(value)}
            />
          ) : (
            <input
              className={s.password}
              placeholder="제목을 입력하세요."
              autoFocus={true}
              required
            />
          )}
          <textarea
            className={s.textarea}
            required
            onClick={p.enterEvent}
            onChange={({ target: { value } }) => p.setContent(value)}
            onKeyDown={checkEnter}
          />
          <button className={p.isRed ? s.redBtn : s.greenBtn}>
            {p.children}
          </button>
        </Modal>
      </form>
    </>
  );
};

export default AlgorithmModal;
