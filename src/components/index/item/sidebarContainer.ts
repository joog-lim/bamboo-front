import { useEffect, useState } from "react";
import verity from "utils/api/verity";
import post from "utils/api/post";

export const createPost = (question: { id: any } | undefined) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState("");

  const tryCreatePost = () => {
    if (title === "" || content === "" || tag === "" || questionAnswer === "") {
      console.log("제대로 입력해주세요.");
    } else {
      post.createPost(title, content, tag, question?.id, questionAnswer);
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
