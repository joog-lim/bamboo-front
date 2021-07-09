import Link from "next/link";

import s from "./index.module.scss";
import config from "constants/config.json";
import HeadingPresenter from "components/heading/headingPresenter";

const onclick = () => {
  alert("태그 누름");
};

const IndexPresenter: React.FC = () => {
  return (
    <main className={s.main}>
      <div>
        <HeadingPresenter
          heading={"모두에게 하고픈 말,"}
          explanation={"무엇인가요?"}
        />
        <aside className={s.inputWrapper}>
          <input className={s.title} placeholder="제목을 입력하세요." />
          <button className={s.tagBtn}>
            태그
            <ul>
              <li onClick={onclick}>#유머</li>
              <li onClick={onclick}>#공부</li>
              <li onClick={onclick}>#일상</li>
              <li onClick={onclick}>#학교</li>
              <li onClick={onclick}>#취업</li>
              <li onClick={onclick}>#관계</li>
              <li onClick={onclick}>#기타</li>
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
        </aside>
      </div>
      <article>
        <nav className={s.nav}>
          <ul>
            <li>
              <Link href={config.LINK.RULE}>규칙</Link>
            </li>
            <li>
              <button>신고하기</button>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
};

export default IndexPresenter;
