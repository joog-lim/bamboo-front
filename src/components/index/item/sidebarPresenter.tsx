import React from "react";

import s from "./sidebar.module.scss";
import HeadingPresenter from "components/heading/headingPresenter";
import { tags } from "./sidebarContainer";
import { getQuestion, createPost } from "./sidebarContainer";

const SideBar: React.FC = () => {
  const question = getQuestion();
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
  ] = createPost(question);

  return (
    <aside>
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
          {tag === "" ? "태그" : tag}
          <ul>
            {React.Children.map(tags, (child) => (
              <li
                onClick={() => {
                  setTag(child);
                }}
              >
                #{child}
              </li>
            ))}
          </ul>
        </button>
        <input
          className={s.fullInput}
          placeholder={`Q. ${question?.question ?? "질문을 준비 중입니다."}
            `}
          onChange={({ target: { value } }) => {
            setQuestionAnswer(value);
          }}
          value={questionAnswer}
        />
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
    </aside>
  );
};

export default SideBar;
