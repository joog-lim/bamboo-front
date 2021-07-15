import Link from "next/link";
import HeadingPresenter from "components/heading/headingPresenter";
import s from "./desc.module.scss";

// outer interface
export interface descPresenterProps {
  descType: string;
}

// inner interface
interface descHeadingProps {
  descType: string;
}

/*
 * This component is made for descPresenter.
 * This component has a different result from the string due to prop.
 * If you want to produce another result, you can modify the object and use it.
 * props : about, rule
*/

const headingObj = {
  about: "안녕하세요! 이곳은",
  rule: "규칙"
}

const explanationObj = {
  about: "광대숲입니다!",
  rule: ""
}

export const descHeading: React.FC<descHeadingProps> = ({
  descType
}) => {
  return (
    <>
    <HeadingPresenter
        heading={ headingObj[descType] }
        explanation={ explanationObj[descType] }
    />
    { descType && (
      <>
        <p className={s.explanation}>
            누구한테도 말하기 어려웠던 이야기부터<br />
            사소하고 조그만 이야기까지.
        </p>
        <hr className={s.greenLine} />
      </>
    )}
    </>
  );
}

export const descAbout = () => {
  return (
    <article className={s.descContentWrapper}>
      <h1 className={s.bold}>안녕하세요, 광대숲 개발자입니다.</h1>
      <p>
        광대숲은 저희 학교만의 익명 커뮤니티를 만들고 운영하며<br />
        학교 사람들이 담아두기만 하던 어려운 이야기부터<br />
        사소하고 조그만 이야기까지 함께 나눴으면 하는 마음으로 개발을 시작하게 되었습니다.
      </p>
      <h2 className={s.title}>자주 묻는 말</h2>
      <h3 className={s.bold}>
        Q. 광대숲이란 무엇인가요?
      </h3>
      <p>
        A. 광대숲은 “광주소프트웨어마이스터고등학교"의<br />
        대나무 숲으로써 익명으로 사람들과 소통할 수 있는<br />
        익명 커뮤니티입니다.
      </p>
      <h3 className={s.bold}>
        Q. 댓글을 달 순 없나요?
      </h3>
      <p>
        A. 댓글 기능이 없는 이유는, 댓글의 여론이 좋지 않아 
        게시글로 자신만의 이야기를 쉬이 나눌 수 없는 환경을 예방하기 위함입니다.
      </p>
      <h3 className={s.bold}>
        Q. 글에 반응을 달고 싶어요.
      </h3>
      <p>
        A. 각 알고리즘들에 반응을 표시하기 위해 이모지를 다는 방안을 검토 중에 있습니다.
      </p>
      <h3 className={s.bold}>
        Q. 내 의견을 찾을 수 없어요.
      </h3>
      <p>
        A. 광대숲은 모든 글이 관리자의 허가를 맡아서 올라가기에 올라갈 때 시간이 걸릴 수 있습니다.<br />
        또한 부적절한 내용으로 검토 및 삭제가 되었을 수 있습니다. 자세한 사항은 <Link href={"/rule"}><span className={s.href}>규칙</span></Link>을 참고해주세요.
      </p>
      <h1 className={s.title}>
        문의
      </h1>
      <p>
        github : url<br />
        email : email<br />
        discord : 이선우#7777
      </p>
    </article>
  )
}