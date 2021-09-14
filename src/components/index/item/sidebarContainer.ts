import { verify } from "./../../../types/api";
import { useEffect, useState } from "react";
import verity from "utils/api/verity";
import post from "utils/api/post";
import RequestApi from "utils/libs/requestApi";

export const useCreatePost = (question: verify) => {
  const [title, setTitle] = useState<any>("");
  const [content, setContent] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [questionAnswer, setQuestionAnswer] = useState<string>("");

  const tryCreatePost = () => {
    if (title === "" || content === "" || questionAnswer === "") {
      alert("빈칸을 채워주세요.");
    } else if (tag === "") {
      alert("태그를 선택해주세요.");
    } else if (questionAnswer !== "#softmeister01") {
      alert("와이파이 비밀번호가 틀렸습니다.");
    } else {
      post.createPost(title, content, tag, question.id, questionAnswer);
      setTitle("");
      setContent("");
      setTag("");
      setQuestionAnswer("");
    }
  };

  return [
    tryCreatePost,
    setTitle,
    setContent,
    setTag,
    setQuestionAnswer,
    title,
    content,
    tag,
    questionAnswer,
  ];
};

export const useGetQuestion = () => {
  const [question, setQuestion] = useState<verify>();
  useEffect(() => {
    verity.getQuestion().then((res) => setQuestion(res.data));
  }, []);
  return question;
};

export const useGetCount = () => {
  const [count, setCount] = useState<any>();
  useEffect(() => {
    RequestApi({
      url: "https://ket73grkcf.execute-api.ap-northeast-2.amazonaws.com/apiV2/post/count",
    }).then((res: any) => setCount(res.data));
  }, []);
  return count;
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

export const transfer: { [idx: string]: any } = {
  PENDING: "대기중인",
  ACCEPTED: "수락된",
  REJECTED: "거절된",
  DELETED: "삭제 요청된",
};
