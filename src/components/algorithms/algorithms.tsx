import style from "./style.module.scss";
import Header from "./item/headerPresenter";
import { AlgorithmsProps } from "./algorithmsContainer";
import { isLoginState } from "src/recoil/atom";
import { useRecoilValue } from "recoil";
import { ThumbsUp, ThumbsDown } from "assets/svg";
import { useState } from "react";
import { emoji, getEmojiRes } from "types/api";
import { EmojiType } from "types/types";
import emojiController from "utils/api/emoji";
import { useEffect } from "react";

const Algorithms: React.FC<AlgorithmsProps> = (p: AlgorithmsProps) => {
  const isLogin = useRecoilValue(isLoginState);
  const [emojiCnt, setEmojiCnt] = useState<getEmojiRes>({
    thumbsDown: 0,
    thumbsUp: 0,
  });
  const [isEmojiClick, setEmojiClick] = useState<emoji>({
    thumbsDown: false,
    thumbsUp: false,
  });

  const getEmoji = (algorithmNumber: number) => {
    emojiController.getEmoji(algorithmNumber).then((res) => {
      setEmojiCnt({
        thumbsDown: res.data.thumbsdown ?? 0,
        thumbsUp: res.data.thumbsup ?? 0,
      });
    });
  };

  const addEmoji = (emoji: EmojiType) => {
    emojiController.addEmoji(emoji, p.data.number).then((res) => {
      console.log(res);
    });
  };

  const deleteEmoji = (emoji: EmojiType) => {
    emojiController.deleteEmoji(emoji, p.data.number).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getEmoji(p.data.number);
  }, []);

  return (
    <article className={style.algorithmsBox}>
      <Header
        id={p.data.id}
        status={p.data.status}
        createdAt={p.data.createdAt}
        number={p.data.number}
        tag={p.data.tag}
        content={p.data.content}
        title={p.data.title}
      />
      <h4>{p.data.title}</h4>
      <p>{p.data.content}</p>
      {isLogin.isAdmin &&
        {
          REJECTED: (
            <>
              <h4>거절 사유</h4> <p>{p.data.reason}</p>
            </>
          ),
          DELETED: (
            <>
              <h4>신고 사유</h4> <p>{p.data.reason}</p>
            </>
          ),
        }[p.data.status]}
      <div>
        <button
          className={style.emojiBtn}
          onClick={() => {
            isEmojiClick.thumbsUp
              ? (setEmojiCnt({
                  thumbsDown: emojiCnt?.thumbsDown,
                  thumbsUp: emojiCnt?.thumbsUp - 1,
                }),
                deleteEmoji("thumbsup"))
              : (setEmojiCnt({
                  thumbsDown: emojiCnt?.thumbsDown,
                  thumbsUp: emojiCnt?.thumbsUp + 1,
                }),
                addEmoji("thumbsup"));
            setEmojiClick({
              thumbsDown: isEmojiClick.thumbsDown,
              thumbsUp: !isEmojiClick.thumbsUp,
            });
          }}
        >
          <ThumbsUp isClick={isEmojiClick.thumbsUp} />
          <span>{emojiCnt?.thumbsUp ?? 0}</span>
        </button>
        <button
          className={style.emojiBtn}
          onClick={() => {
            isEmojiClick.thumbsDown
              ? (setEmojiCnt({
                  thumbsDown: emojiCnt?.thumbsDown - 1,
                  thumbsUp: emojiCnt?.thumbsUp,
                }),
                deleteEmoji("thumbsdown"))
              : (setEmojiCnt({
                  thumbsDown: emojiCnt?.thumbsDown + 1,
                  thumbsUp: emojiCnt?.thumbsUp,
                }),
                addEmoji("thumbsdown"));
            setEmojiClick({
              thumbsDown: !isEmojiClick.thumbsDown,
              thumbsUp: isEmojiClick.thumbsUp,
            });
          }}
        >
          <ThumbsDown isClick={isEmojiClick.thumbsDown} />
          <span>{emojiCnt?.thumbsDown ?? 0}</span>
        </button>
      </div>
    </article>
  );
};

export default Algorithms;
