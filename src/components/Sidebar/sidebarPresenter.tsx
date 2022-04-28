import React, { Fragment, useState } from "react";
import { useRecoilValue } from "recoil";

import s from "./sidebar.module.scss";
import HeadingPresenter from "components/heading/headingPresenter";
import { tags } from "./sidebarContainer";
import { useGetQuestion, useCreatePost, transfer } from "./sidebarContainer";
import { hasTokenState } from "recoil/atom";
import { useEffect } from "react";
import RequestApi from "utils/libs/requestApi";
import { AxiosResponse } from "axios";

const SideBar: React.FC = () => {
  const { isAdmin, isLogin } = useRecoilValue(hasTokenState);
  const [tagClicked, setTagClicked] = useState<boolean>(false);
  const question = useGetQuestion();
  const [count, setCount] = useState<Array<{ status: string; count: number }>>([
    { status: "loading", count: 0 },
  ]);
  const [
    tryCreatePost,
    setTitle,
    setContent,
    setTag,
    setQuestionAnswer,
    title,
    content,
    tag,
    questionAnswer,
  ] = useCreatePost(
    question ?? {
      data: {
        id: "",
        question: "",
      },
    }
  );

  useEffect(() => {
    if (isAdmin) return;
    RequestApi({
      url: "/algorithm/count",
      canHeader: true,
    }).then(
      (
        res: AxiosResponse<{ data: { status: string; count: number }[] }> | void
      ) => setCount(res?.data.data ?? [{ status: "loading", count: 0 }])
    );
  }, [isAdmin]);

  const tagCasement = () => {
    setTagClicked(true);
    setTimeout(() => {
      setTagClicked(false);
    }, 100);
  };

  return isAdmin ? (
    <section>
      <HeadingPresenter
        heading={"모두에게 하고픈 말,"}
        explanation={"무엇인가요?"}
      />
      <article className={s.admin}>
        <h3>알고리즘 현황</h3>
        <br />
        {count.map((item: { status: string; count: number }, i: number) => (
          <Fragment key={i}>
            <h3>{transfer[item.status]} 알고리즘</h3>
            <p>{item.count}개</p>
          </Fragment>
        ))}
      </article>
    </section>
  ) : (
    <section>
      <HeadingPresenter
        heading={"모두에게 하고픈 말,"}
        explanation={"무엇인가요?"}
      />
      <div className={s.inputWrapper}>
        <input
          className={s.title}
          placeholder="제목을 입력하세요."
          autoFocus={true}
          onChange={({ target: { value } }) => {
            setTitle(value);
          }}
          value={title}
        />
        <button className={s.tagBtn}>
          {!tag ? "태그" : tag}
          <ul className={tagClicked ? s.tagClose : s.tagOpen}>
            {React.Children.map(tags, (child) => (
              <li
                onClick={() => {
                  setTag(child);
                  tagCasement();
                }}
              >
                #{child}
              </li>
            ))}
          </ul>
        </button>
        {!isLogin && (
          <input
            className={s.fullInput}
            placeholder={`Q. ${
              question?.data.question ?? "질문을 준비 중입니다."
            }
            `}
            onChange={({ target: { value } }) => {
              setQuestionAnswer(value);
            }}
            value={questionAnswer}
          />
        )}
        <div className={s.textareaBox}>
          <textarea
            className={s.fullTextarea}
            placeholder="내용을 입력하세요."
            onChange={({ target: { value } }) => {
              setContent(value);
            }}
            value={content}
          ></textarea>
          <button onClick={tryCreatePost} className={s.submitBtn}>
            전송
          </button>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
