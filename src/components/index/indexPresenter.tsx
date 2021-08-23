import Link from "next/link";
import React from "react";

import s from "./index.module.scss";
import config from "constants/config.json";
import Algorithms from "components/algorithms/algorithms";
import SideBar from "./item/sidebarPresenter";
import { getPost } from "./indexContainer";
import { AlgorithmApi } from "types/types";

const IndexPresenter: React.FC = () => {
  const data = getPost();

  return (
    <main className={s.main}>
      <SideBar />
      <article>
        <section>
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
        </section>
        <article className={s.algorithms}>
          {React.Children.toArray(
            data?.map((item: AlgorithmApi) => <Algorithms data={item} />)
          )}
        </article>
      </article>
    </main>
  );
};

export default IndexPresenter;
