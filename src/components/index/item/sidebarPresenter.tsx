import React from "react";

import s from "./sidebar.module.scss";
import HeadingPresenter from "components/heading/headingPresenter";
import { onclick, tags } from "./sidebarContainer";

const SideBar: React.FC = () => {
  return (
    <aside>
      <HeadingPresenter
        heading={"모두에게 하고픈 말,"}
        explanation={"무엇인가요?"}
      />
      <div className={s.inputWrapper}>
        <input className={s.title} placeholder="제목을 입력하세요." />
        <button className={s.tagBtn}>
          태그
          <ul>
            {React.Children.map(tags, (child) => (
              <li onClick={onclick}>&num;{child}</li>
            ))}
          </ul>
        </button>
        <input
          className={s.fullInput}
          placeholder="Q. 학교 와이파이 비밀번호는 무엇일까요?"
        />
        <div className={s.textareaBox}>
          <textarea
            className={s.fullTextarea}
            placeholder="내용을 입력하세요."
          ></textarea>
          <button className={s.submitBtn}>전송</button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
