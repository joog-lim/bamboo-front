import { Dispatch, SetStateAction } from "react";

export interface HeaderProps {
  idx: number;
  status: string;
  createdAt: number;
  number: number | string;
  title?: string;
  content?: string;
  tag?: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const getDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  let time: string;
  if (date.getHours() < 7) time = "새벽";
  else if (date.getHours() < 12) time = "오전";
  else if (date.getHours() < 19) time = "오후";
  else time = "저녁";
  return `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${time}`;
};
