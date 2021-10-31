import style from "./style.module.scss";
import Header from "./item/headerPresenter";
import { algorithmsProps } from "./algorithmsContainer";
import { hasTokenState } from "recoil/atom";
import { useRecoilValue } from "recoil";
import { Leaf } from "assets/svg";
import { useState } from "react";
import { EmojiType } from "types/types";
import emojiController from "utils/api/emoji";
import { useEffect } from "react";
import { AxiosResponse } from "axios";
import { emojiRes } from "types/api";

const Algorithms: React.FC<algorithmsProps> = (p: algorithmsProps) => {
  const { isAdmin, isLogin } = useRecoilValue(hasTokenState);
  const [emojiCnt, setEmojiCnt] = useState(0);
  const [isEmojiClick, setEmojiClick] = useState(false);

  const getEmoji = (algorithmNumber: number) => {
    emojiController
      .getEmoji(algorithmNumber)
      .then((res: AxiosResponse<emojiRes> | void) => {
        setEmojiCnt(res?.data?.leaf ?? 0);
        window.localStorage.getItem(String(algorithmNumber)) === "true" &&
          setEmojiClick(true);
      });
  };

  const addEmoji = (emoji: EmojiType) => {
    emojiController.addEmoji(isLogin, emoji, p.data.number).then((res: any) => {
      window.localStorage.setItem(String(p.data.number), "true");
    });
  };

  const deleteEmoji = (emoji: EmojiType) => {
    emojiController
      .deleteEmoji(isLogin, emoji, p.data.number)
      .then((_: AxiosResponse<emojiRes> | void) => {
        window.localStorage.setItem(String(p.data.number), "false");
      });
  };

  const onEmojiClick = () => {
    if (isEmojiClick) {
      setEmojiCnt(emojiCnt - 1);
      deleteEmoji("leaf");
    } else {
      setEmojiCnt(emojiCnt + 1);
      addEmoji("leaf");
    }
    setEmojiClick(!isEmojiClick);
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
      {isAdmin &&
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
        <button className={style.emojiBtn} onClick={onEmojiClick}>
          <Leaf isClick={isEmojiClick} />
          <span>{emojiCnt ?? 0}</span>
        </button>
      </div>
    </article>
  );
};

export default Algorithms;
