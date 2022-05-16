import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import AlgorithmFilter from "components/main/item/algorithmFilter";
import { algorithm, getAlgorithmsRes } from "types/api";
import Algorithm from "utils/api/algorithm";
import {
  hasTokenState,
  algorithmFilterState,
  algorithmState,
  reLoadingState,
} from "recoil/atom";
import SpinnerBar from "components/spinner/spinnerPresenter";
import { AxiosResponse } from "axios";
import Algorithms from "components/algorithms/algorithms";
import s from "./algorithmList.module.scss";

const AlgorithmList: React.FC = () => {
  const { isAdmin, isLogin } = useRecoilValue(hasTokenState);
  const algorithmFilter = useRecoilValue(algorithmFilterState);
  const [isReLoading, setReLoading] = useRecoilState(reLoadingState);

  const [algorithm, setAlgorithm] = useRecoilState(algorithmState);
  const [isHasNext, setIsHasNext] = useState(true);
  const [cursor, setCursor] = useState<number>();
  let hasNext: boolean | undefined = true;
  let cursor2: number | undefined;

  let posts: algorithm[] | undefined;

  const getPostList = () => {
    Algorithm.getAlgorithm(isLogin, isAdmin, cursor2, algorithmFilter).then(
      (res: AxiosResponse<getAlgorithmsRes> | void) => {
        if (res?.data) {
          const algorithmData = res.data.data;
          posts = algorithmData.data;
          cursor2 = algorithmData.nextCursor;
          hasNext = algorithmData.hasNext;
          setAlgorithm([algorithm.concat(posts || algorithm)][0]);
          setIsHasNext(algorithmData.hasNext || false);
          setCursor(algorithmData.nextCursor);
        }
      }
    );
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight * 0.9 && hasNext) {
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
    cursor2 = undefined;
    hasNext = true;
    getPostList();
    setReLoading(false);
  }, [isReLoading, isAdmin]);

  cursor2 ??= cursor;
  hasNext = isHasNext;

  return (
    <article className={s.algorithms}>
      {isAdmin && <AlgorithmFilter />}
      {isAdmin && <h3 className={s.heading}>{algorithmFilter} 인 알고리즘</h3>}
      {React.Children.toArray(
        algorithm.slice(1)?.map((item: algorithm) => <Algorithms data={item} />)
      )}
      <div>
        {hasNext ? (
          <SpinnerBar background={false} />
        ) : (
          "더 이상 알고리즘이 존재하지 않아요!"
        )}
      </div>
    </article>
  );
};

export default AlgorithmList;
