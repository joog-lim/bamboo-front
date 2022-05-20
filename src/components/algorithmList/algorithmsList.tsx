import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import AlgorithmFilter from "components/main/item/algorithmFilter";
import { Algorithm, getAlgorithmsRes } from "types/api";
import AlgorithmAPI from "utils/api/algorithm";
import {
  algorithmListFilterState,
  algorithmListState,
  isLoadingState,
} from "recoil/atom";
import {currentUserStateState} from "recoil/selectors";
import SpinnerBar from "components/spinner/spinnerPresenter";
import { AxiosResponse } from "axios";
import Algorithms from "components/algorithms/algorithms";
import s from "./algorithmList.module.scss";

const AlgorithmList: React.FC = () => {
	const [isReLoading, setReLoading] = useRecoilState(isLoadingState);
	const [algorithm, setAlgorithm] = useRecoilState(algorithmListState);

  const {isAdmin, isGuest} = useRecoilValue(currentUserStateState);
  const currentAlgorithmFilter = useRecoilValue(algorithmListFilterState);;

  const [isHasNext, setIsHasNext] = useState<boolean>(true);
  const [cursor, setCursor] = useState<number>();

  let hasNext: boolean | undefined = true;
  let cursor2: number | undefined;
  let posts: Algorithm[] | undefined;

  const getPostList = () => {
		AlgorithmAPI.getAlgorithm(isAdmin, isGuest, cursor2, currentAlgorithmFilter).then(
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
      {isAdmin && <h3 className={s.heading}>{currentAlgorithmFilter} 인 알고리즘</h3>}
      {React.Children.toArray(
        algorithm.slice(1)?.map((item: Algorithm) => <Algorithms data={item} />)
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
