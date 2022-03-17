import React from "react";
import { useRecoilState } from "recoil";

import s from "./algorithmFilter.module.scss";
import {
  algorithmFilterState,
  algorithmState,
  reLoadingState,
} from "recoil/atom";
import { AlgorithmType } from "src/types/types";

const AlgorithmFilter: React.FC = () => {
  const tags: string[] = ["대기", "수락", "거절", "삭제"];

  const algorithmsState: { [idx: string]: AlgorithmType } = {
    대기: "PENDING",
    수락: "ACCEPTED",
    거절: "REJECTED",
    삭제: "DELETED",
  };

  const algorithmsStateEng = {
    PENDING: "대기",
    ACCEPTED: "수락",
    REJECTED: "거절",
    DELETED: "삭제",
  };

  const [algorithmFilter, setAlgorithmFilter] = useRecoilState(
    algorithmFilterState
  );

  const [data, setData] = useRecoilState(algorithmState);
  const [isReLoading, setReLoading] = useRecoilState(reLoadingState);

  return (
    <button className={s.algoritmFilterBtn}>
      {algorithmsStateEng[algorithmFilter]}
      <ul>
        {React.Children.map(tags, (child: string) => (
          <li
            onClick={() => {
              setData([
                {
                  algorithmNumber: 0,
                  createdAt: 0,
                  idx: "",
                  emojiis: [],
                  emojiCount: 0,
                },
              ]);
              setAlgorithmFilter(algorithmsState[child]);
              setReLoading(true);
            }}
          >
            {child}
          </li>
        ))}
      </ul>
    </button>
  );
};

export default AlgorithmFilter;
