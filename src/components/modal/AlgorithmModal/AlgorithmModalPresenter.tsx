import React, { useState } from "react";
import Modal from "react-modal";

import s from "./algorithmModal.module.scss";
import { customStyles, algorithmModalProps } from "./AlgorithmModalContainer";
import modalController from "../modal";
import Post from "src/utils/api/post";

const AlgorithmModal: React.FC<algorithmModalProps> = (
  p: algorithmModalProps
) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [reason, setReason] = useState("");

  const [openModal, closeModal] = modalController(setModalIsOpen);

  //TODO: 함수 분리 작업
  const checkEnter = (e: { key: string }) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const reportPost = () => {
    Post.reportPost(p.algorithmId, content).then((res: { status: number }) => {
      const result =
        res.status === 200
          ? "성공적으로 신고되었습니다."
          : `오류가 발생하였습니다 메시지: ${res}`;
      alert(result);
      closeModal();
    });
  };

  const modifyPost = () => {
    Post.modifyPost(p.algorithmId, title, reason, content).then((res: any) => {
      res.status === 200
        ? alert("성공적으로 수정되었습니다.")
        : alert("실패하였습니다.");
      closeModal();
    });
  };

  const setStatusPost = (status: string) => {
    Post.setStatusPost(p.algorithmId, status).then((res: any) => {
      res.status === 200
        ? alert("성공적으로 상태가 변경되었습니다.")
        : alert("실패하였습니다.");
      closeModal();
    });
  };

  const deletePost = () => {
    Post.deletePost(p.algorithmId, content).then((res: any) => {
      res.status === 200
        ? alert("성공적으로 삭제되었습니다.")
        : alert("실패하였습니다.");
      closeModal();
    });
  };

  const onClick = () => {
    switch (p.children) {
      case "삭제": {
        deletePost();
        break;
      }
      case "신고": {
        reportPost();
        break;
      }
      case "거절": {
        setStatusPost("REJECTED");
        break;
      }
      case "수정": {
        modifyPost();
        break;
      }
      default:
        alert("오류가 발생하였습니다: 적절하지 않은 p.children");
    }
  };

  return (
    <>
      <button onClick={openModal} className={p.isRed ? s.red : s.h1}>
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
              defaultValue={`알고리즘을 ${p.children}합니다`}
              readOnly
            />
          ) : (
            <input
              className={s.password}
              placeholder="제목을 입력하세요."
              autoFocus={true}
              required
              onChange={({ target: { value } }) => setTitle(value)}
            />
          )}
          {p.isReason && (
            <input
              className={s.password}
              placeholder="사유를 입력하세요."
              autoFocus={true}
              required
              onChange={({ target: { value } }) => setReason(value)}
            />
          )}
          <textarea
            className={s.textarea}
            required
            onChange={({ target: { value } }) => setContent(value)}
            placeholder="내용을 입력하세요."
            onKeyDown={checkEnter}
          />
          <button className={p.isRed ? s.redBtn : s.greenBtn} onClick={onClick}>
            {p.children}
          </button>
        </Modal>
      </form>
    </>
  );
};

export default AlgorithmModal;
