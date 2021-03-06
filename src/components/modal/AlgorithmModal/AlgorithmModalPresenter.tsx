import React, { useState } from "react";
import Modal from "react-modal";

import s from "./algorithmModal.module.scss";
import { customStyles, algorithmModalProps } from "./AlgorithmModalContainer";
import modalController from "../modal";
import Algorithm from "src/utils/api/algorithm";
import SpinnerBar from "components/spinner/spinnerPresenter";
import { loadingState } from "recoil/atom";
import { useRecoilState } from "recoil";
import { AxiosResponse } from "axios";
import { deleteRes, modifyRes, reportRes, setStatusRes } from "types/api";

const AlgorithmModal: React.FC<algorithmModalProps> = (
  p: algorithmModalProps
) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //여기 초기값은 의미없는 값입니다.
  //input에서 입력을 하였는 지 판별하기 위해 넣었습니다.
  //좋은 방법이 있다면 알려주세요.
  const [content, setContent] = useState("default32rewfdas");
  const [title, setTitle] = useState("default32rewfdas");
  const [_reason, setReason] = useState("");
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const [openModal, closeModal] = modalController(setModalIsOpen);

  const reportAlgorithm = () => {
    Algorithm.reportAlgorithm(p.algorithmIdx, content).then(
      (res: AxiosResponse<reportRes> | void) => {
        setIsLoading(false);
        const result =
          res?.status === 200
            ? "성공적으로 신고되었습니다."
            : `오류가 발생하였습니다 메시지: ${res}`;
        alert(result);
        closeModal();
      }
    );
  };

  const modifyAlgorithm = () => {
    Algorithm.modifyAlgorithm(p.algorithmIdx, title, content).then(
      (res: AxiosResponse<modifyRes> | void) => {
        setIsLoading(false);
        res?.status === 200
          ? alert("성공적으로 수정되었습니다.")
          : alert("수정에 실패하였습니다.");
        closeModal();
      }
    );
  };

  const setStatusAlgorithm = (status: string) => {
    Algorithm.setStatusAlgorithm(p.algorithmIdx, status, content).then(
      (res: AxiosResponse<setStatusRes> | void) => {
        setIsLoading(false);
        res?.status === 200
          ? alert("성공적으로 상태가 변경되었습니다.")
          : alert("상태 변경에 실패하였습니다.");
        closeModal();
      }
    );
  };

  const deleteAlgorithm = () => {
    Algorithm.deleteAlgorithm(p.algorithmIdx, content).then(
      (res: AxiosResponse<deleteRes> | void) => {
        setIsLoading(false);
        res?.status === 200
          ? alert("성공적으로 삭제되었습니다.")
          : alert("삭제에 실패하였습니다.");
        closeModal();
      }
    );
  };

  const onClick = () => {
    if (content === "default32rewfdas") {
      alert("내용을 입력하여주세요.");
    }
    setIsLoading(true);
    switch (p.children) {
      case "삭제": {
        deleteAlgorithm();
        break;
      }
      case "신고": {
        reportAlgorithm();
        break;
      }
      case "거절": {
        setStatusAlgorithm("REJECTED");
        break;
      }
      case "수정": {
        modifyAlgorithm();
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
          {isLoading && <SpinnerBar background={true} />}
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
