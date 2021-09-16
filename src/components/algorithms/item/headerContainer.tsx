export interface HeaderProps {
  id: string;
  status: string;
  createdAt: number;
  number: number | string;
  title?: string;
  content?: string;
  tag?: string;
}

export const getDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  let time: string;
  if (date.getHours() < 7) time = "새벽";
  else if (date.getHours() < 12) time = "오전";
  else time = "오후";
  return `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${time}`;
};
