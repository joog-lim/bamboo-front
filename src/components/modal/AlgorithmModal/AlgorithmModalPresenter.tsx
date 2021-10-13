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

  //여기 초기값은 의미없는 값입니다.
  //input에서 입력을 하였는 지 판별하기 위해 넣었습니다.
  //좋은 방법이 있다면 알려주세요.
  const [content, setContent] = useState("default32rewfdas");
  const [title, setTitle] = useState("default32rewfdas");
  const [reason, setReason] = useState("");

  const [openModal, closeModal] = modalController(setModalIsOpen);

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
    Post.setStatusPost(p.algorithmId, status, content).then((res: any) => {
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
    if (content === "default32rewfdas") {
      alert("내용을 입력하여주세요.");
    }
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
              type="text"
              className={s.password}
              defaultValue={`알고리즘을 ${p.children}합니다`}
              readOnly
            />
          ) : (
            <input
              type="text"
              className={s.password}
              placeholder="제목을 입력하세요."
              autoFocus={true}
              required
              value={title === "default32rewfdas" ? p.title : title}
              onChange={({ target: { value } }) => setTitle(value)}
            />
          )}
          {p.isReason && (
            <input
              type="text"
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
            value={content === "default32rewfdas" ? p.content : content}
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
