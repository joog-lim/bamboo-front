import Link from "next/link";
import s from "../components/descriptions/desc.module.scss";
interface SubDescriptionDecoClass {
  explanation: string;
  greenLine: string;
}

interface Question {
  q: string;
  a: string | JSX.Element;
}
export const intro = ({ explanation, greenLine }: SubDescriptionDecoClass) => ({
  about: {
    heading: "안녕하세요! 이곳은",
    explanation: "광대숲입니다!",
    subDescription: (
      <>
        <p className={explanation}>
          누구한테도 말하기 어려웠던 이야기부터 사소하고 조그만 이야기까지.
        </p>
        <hr className={greenLine} />
      </>
    ),
  },
  rule: {
    heading: "광대숲입니다!",
    explanation: "",
    subDescription: <></>,
  },
});

export const questionList: Question[] = [
  {
    q: "광대숲이란 무엇인가요?",
    a:
      "광대숲은 “광주소프트웨어마이스터고등학교“의 대나무 숲으로써 익명으로 사람들과 소통할 수 있는 익명 커뮤니티입니다.",
  },
  {
    q: "댓글을 달 순 없나요?",
    a:
      "댓글 기능이 없는 이유는, 댓글의 여론이 좋지 않아 게시글로 자신만의 이야기를 쉬이 나눌 수 없는 환경을 예방하기 위함입니다.",
  },
  {
    q: "내 의견을 찾을 수 없어요. / 내 글이 안 보여요.",
    a: (
      <>
        광대숲은 모든 글이 관리자의 허가를 맡아서 올라가기에 올라갈 때 시간이
        걸릴 수 있습니다. 또한 부적절한 내용으로 검토 및 삭제가 되었을 수
        있습니다. 자세한 사항은{" "}
        <Link href={"/rule"}>
          <span className={s.href}>규칙</span>
        </Link>
        을 참고해주세요.
      </>
    ),
  },
];

export const contactList = [
  {
    solution: "Github",
    link: "https://github.com/joog-lim",
  },
  {
    solution: "Discord",
    link: "https://discord.gg/x4Qq9Xr8F2",
  },
  {
    solution: "mail",
    link: "mailto:jooglim.org@gmail.com",
  },
];
