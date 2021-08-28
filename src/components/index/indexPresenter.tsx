import Link from "next/link";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import s from "./index.module.scss";
import config from "constants/config.json";
import Algorithms from "components/algorithms/algorithms";
import SideBar from "./item/sidebarPresenter";
import { AlgorithmApi } from "types/types";
import Post from "utils/api/post";

const IndexPresenter: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [cursor, setCursor] = useState("");
  const [hasNext, setHasNext] = useState(false)

  const getPostList = () => {
      let posts;
      Post.getPost(cursor).then((res) => {
        posts = res.data.posts;
        setData([data.concat(posts)][0]);
        setHasNext(data?.hasNext);
      });
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight >= scrollHeight) {
      getPostList();
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
      return () => {window.removeEventListener('scroll', handleScroll)}
  })

  if (data.length < 15) {
    getPostList();
  }

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
        <article className={s.algorithms} id="scrollableDiv">
          {data?.length}
            {React.Children.toArray(
              data?.map((item: AlgorithmApi) => <Algorithms data={item} />)
            )}
        </article>
      </article>
    </main>
  );
};

export default IndexPresenter;
