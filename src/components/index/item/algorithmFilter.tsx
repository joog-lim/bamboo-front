import React from "react";
import { useRecoilState } from "recoil";

import s from "./algorithmFilter.module.scss";
import { algorithmFilterState } from "src/recoil/atom";

const AlgorithmFilter: React.FC = () => {
  const tags: string[] = ["대기", "수락", "거절", "삭제"];

  const algorithmsState = {
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

  const [algorithmFilter, setAlgorithmFilter] =
    useRecoilState(algorithmFilterState);

  return (
    <button className={s.algoritmFilterBtn}>
      {algorithmsStateEng[algorithmFilter]}
      <ul>
        {React.Children.map(tags, (child) => (
          <li
            onClick={() => {
              setAlgorithmFilter(algorithmsState[child]);
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
