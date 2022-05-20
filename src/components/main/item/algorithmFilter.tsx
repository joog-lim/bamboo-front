import React from "react";
import {useRecoilState, useSetRecoilState} from "recoil";

import s from "./algorithmFilter.module.scss";
import {
  algorithmListFilterState,
  algorithmListState,
  isLoadingState,
} from "recoil/atom";
import { AlgorithmListStateType } from "src/types/types";

const tags: string[] = ["대기", "수락", "거절", "신고"];

const algorithmsState: { [idx: string]: AlgorithmListStateType } = {
  대기: "PENDING",
  수락: "ACCEPTED",
  거절: "REJECTED",
  신고: "REPORTED",
};

const algorithmsStateEng = {
  PENDING: "대기",
  ACCEPTED: "수락",
  REJECTED: "거절",
  REPORTED: "신고",
};

const AlgorithmFilter: React.FC = () => {
  const [algorithmFilter, setAlgorithmFilter] = useRecoilState(
    algorithmListFilterState
  );

  const [_data, setData] = useRecoilState(algorithmState);
  const [_isReLoading, setReLoading] = useRecoilState(reLoadingState);

  const onClickAlgorithmBtn = (tag: string) => {
    if (algorithmFilter === tag) {
      return;
    }
    setData([
      {
        algorithmNumber: 0,
        createdAt: 0,
        idx: 0,
        isEmoji: [],
        emojiCount: 0,
        isClicked: false,
      },
    ]);
    setAlgorithmFilter(algorithmsState[tag]);
    setReLoading(true);
  };

  return (
    <button className={s.algoritmFilterBtn}>
      {algorithmsStateEng[algorithmFilter]}
      <ul>
        {React.Children.map(tags, (tag: string) => (
          <li onClick={() => onClickAlgorithmBtn(tag)}>{tag}</li>
        ))}
      </ul>
    </button>
  );
};

export default AlgorithmFilter;
