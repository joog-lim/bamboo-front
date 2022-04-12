import style from "./style.module.scss";
import Header from "./item/headerPresenter";
import { algorithmsProps } from "./algorithmsContainer";
import { hasTokenState, algorithmFilterState } from "recoil/atom";
import { useRecoilValue } from "recoil";
import { Leaf } from "assets/svg";
import { useState } from "react";
import emojiController from "utils/api/emoji";
import { AxiosResponse } from "axios";
import { emojiRes } from "types/api";

const Algorithms: React.FC<algorithmsProps> = (p: algorithmsProps) => {
  const { isAdmin, isLogin } = useRecoilValue(hasTokenState);
  const AlgorithmFilter = useRecoilValue(algorithmFilterState);

  const [emojiCnt, setEmojiCnt] = useState<number>(0);
  const [isEmojiClick, setEmojiClick] = useState<boolean>(false);
  const { number, idx } = p.data.algorithmNumber;
  
  const addEmoji = () => {
    emojiController
      .addEmoji(isLogin, idx)
      .then((res: AxiosResponse<emojiRes> | void) => {
        if (res?.status === 200) {
          window.localStorage.setItem(String(idx), "true");
        } else {
          setEmojiClick(false);
          setEmojiCnt(emojiCnt);
        }
      });
  };

  const deleteEmoji = () => {
    emojiController
      .deleteEmoji(isLogin, idx)
      .then((res: AxiosResponse<emojiRes> | void) => {
        if (res?.status === 200) {
          window.localStorage.setItem(String(idx), "false");
        } else {
          setEmojiClick(true);
          setEmojiCnt(emojiCnt);
        }
      });
  };

  const onEmojiClick = () => {
    if (isEmojiClick) {
      setEmojiCnt(emojiCnt - 1);
      deleteEmoji();
    } else {
      setEmojiCnt(emojiCnt + 1);
      addEmoji();
    }
    setEmojiClick(!isEmojiClick);
  };

  return (
    <article className={style.algorithmsBox}>
      <Header
        id={String(idx)}
        status={AlgorithmFilter}
        createdAt={p.data.createdAt}
        number={number}
        tag={p.data.tag}
        content={p.data.content}
        title={p.data.title}
      />
      <h4>{p.data.title}</h4>
      <p>{p.data.content}</p>
      {isAdmin &&
        {
          REJECTED: (
            <>
              <h4>거절 사유</h4> <p>{p.data.reason}</p>
            </>
          ),
          REPORTED: (
            <>
              <h4>신고 사유</h4> <p>{p.data.reason}</p>
            </>
          ),
          PENDING: <></>,
          ACCEPTED: <></>,
        }[AlgorithmFilter]}
      <div>
        <button className={style.emojiBtn} onClick={onEmojiClick}>
          <Leaf isClick={isEmojiClick} />
          <span>{emojiCnt}</span>
        </button>
      </div>
    </article>
  );
};

export default Algorithms;
