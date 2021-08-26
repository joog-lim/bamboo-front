import { useEffect, useState } from "react";
import verity from "utils/api/verity";

export const getQuestion = () => {
  const [question, setQuestion] = useState();
  useEffect(() => {
    verity.getQuestion().then((res) => setQuestion(res.data));
  }, []);
  return question;
};

export const onclick = () => {
  alert("태그 누름");
};

export const tags: string[] = [
  "유머",
  "공부",
  "일상",
  "학교",
  "취업",
  "관계",
  "기타",
];
