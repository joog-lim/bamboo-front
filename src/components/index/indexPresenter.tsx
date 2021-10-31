import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import s from "./index.module.scss";
import Algorithms from "components/algorithms/algorithms";
import SideBar from "./item/sidebarPresenter";
import AlgorithmFilter from "./item/algorithmFilter";
import { algorithm, getPostRes } from "types/api";
import Post from "utils/api/post";
import {
  hasTokenState,
  algorithmFilterState,
  algorithmState,
  reLoadingState,
} from "recoil/atom";
import SpinnerBar from "components/spinner/spinnerPresenter";
import { AxiosResponse } from "axios";

const IndexPresenter: React.FC = () => {
  const { isAdmin } = useRecoilValue(hasTokenState);
  const algorithmFilter = useRecoilValue(algorithmFilterState);
  const [isReLoading, setReLoading] = useRecoilState(reLoadingState);

  const [data, setData] = useRecoilState(algorithmState);
  const [isHasNext, setIsHasNext] = useState(true);
  let hasNext: boolean | undefined = true;
  let cursor2: number | undefined;

  const getPostList = () => {
    let posts: algorithm[] | undefined;
    Post.getPost(isAdmin, cursor2, algorithmFilter).then(
      (res: AxiosResponse<getPostRes> | void) => {
        posts = res?.data?.posts;
        cursor2 = res?.data.cursor;
        hasNext = res?.data.hasNext;
        setData(
          [
            data.concat(
              posts || [{ number: 0, createdAt: 0, id: "", status: "" }]
            ),
          ][0]
        );
        setIsHasNext(res?.data.hasNext || true);
      }
    );
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

  useEffect(() => {
    getPostList();
    setReLoading(false);
  }, [isReLoading]);

  cursor2 = data.length - 1 === 0 ? undefined : data[data.length - 1].number;
  hasNext = isHasNext;

  return (
    <main className={s.main}>
      <SideBar />
      <article className={s.algorithms}>
        {isAdmin && <AlgorithmFilter />}
        {isAdmin && (
          <h3 className={s.heading}>{algorithmFilter} 인 알고리즘</h3>
        )}
        {React.Children.toArray(
          data.slice(1)?.map((item: algorithm) => <Algorithms data={item} />)
        )}
        <p>
          {hasNext ? (
            <SpinnerBar background={false} />
          ) : (
            "더 이상 알고리즘이 존재하지 않아요!"
          )}
        </p>
      </article>
    </main>
  );
};

export default IndexPresenter;
