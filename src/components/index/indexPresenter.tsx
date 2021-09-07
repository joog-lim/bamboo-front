import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import s from "./index.module.scss";
import Algorithms from "components/algorithms/algorithms";
import SideBar from "./item/sidebarPresenter";
import AlgorithmFilter from "./item/algorithmFilter";
import { AlgorithmApi } from "types/types";
import Post from "utils/api/post";
import { isAdminState, algorithmFilterState } from "src/recoil/atom";

const IndexPresenter: React.FC = () => {
  const isAdmin = useRecoilValue(isAdminState);
  const algorithmFilter = useRecoilValue(algorithmFilterState);

  const [data, setData] = useState<any[]>([]);
  const [isHasNext, setIsHasNext] = useState(true);
  let hasNext = true;
  let cursor2: string = "";

  const getPostList = () => {
    let posts;
    Post.getPost(isAdmin, cursor2, algorithmFilter).then((res) => {
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
      hasNext = false;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    getPostList();
  }, []);

  cursor2 = data[data.length - 1].number;
  hasNext = isHasNext;

  return (
    <main className={s.main}>
      <SideBar />
      <article>
        {isAdmin && <AlgorithmFilter />}
        <article className={s.algorithms} id="scrollableDiv">
          {isAdmin && (
            <h3 className={s.heading}>{algorithmFilter} 인 알고리즘</h3>
          )}
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
