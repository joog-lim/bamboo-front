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
  const [data, setData] = useState([]);
  const [isHasNext, setIsHasNext] = useState(true);
  let hasNext = true;
  let cursor2: string = "";

  const getPostList = () => {
    let posts;
    Post.getPost(cursor2).then((res) => {
      posts = res.data.posts;
      cursor2 = res.data.cursor;
      hasNext = res.data.hasNext;
      setData([data.concat(posts)][0]);
      setIsHasNext(res.data.hasNext);
    });
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && hasNext) {
      getPostList();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  if (data.length < 15) {
    getPostList();
  }

  cursor2 = data[data.length - 1]?.number;
  hasNext = isHasNext;

  return (
    <main className={s.main}>
      <SideBar />
      <article>
        <article className={s.algorithms} id="scrollableDiv">
          {React.Children.toArray(
            data?.map((item: AlgorithmApi) => <Algorithms data={item} />)
          )}
          <p>
            {hasNext ? "로딩 중..." : "더 이상 알고리즘이 존재하지 않아요!"}
          </p>
        </article>
      </article>
    </main>
  );
};

export default IndexPresenter;
