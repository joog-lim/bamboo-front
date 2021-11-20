<<<<<<< HEAD:src/components/Sidebar/sidebarContainer.ts
import { verify } from "types/api";
=======
import { verify } from "../../../types/api";
>>>>>>> feeture/renameIndex:src/components/main/item/sidebarContainer.ts
import { useEffect, useState } from "react";
import verity from "utils/api/verity";
import post from "utils/api/post";
import RequestApi from "utils/libs/requestApi";
import { AxiosResponse } from "axios";

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
    } else {
      post.createPost(title, content, tag, question.id, questionAnswer);
      alert(
        "성공적으로 알고리즘이 대기 상태에 들어갔습니다!\n곧 수락 상태로 보실 수 있을 거에요!"
      );
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
    verity
      .getQuestion()
      .then((res: AxiosResponse<verify> | void) => setQuestion(res?.data));
  }, []);
  return question;
};

export const useGetCount = () => {
  const [count, setCount] = useState<any>();
  useEffect(() => {
    RequestApi({
      url: process.env.NEXT_PUBLIC_APP_BASE_URLV2 + "/post/count",
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
