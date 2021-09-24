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

export const descHeading: React.FC<descHeadingProps> = ({ descType }) => {
  return (
    <>
      <HeadingPresenter
        heading={
          {
            about: "안녕하세요! 이곳은",
            rule: "규칙",
          }[descType]!
        }
        explanation={
          {
            about: "광대숲입니다!",
            rule: "",
          }[descType]!
        }
      />
      {descType === "about" && (
        <>
          <p className={s.explanation}>
            누구한테도 말하기 어려웠던 이야기부터 사소하고 조그만 이야기까지.
          </p>
          <hr className={s.greenLine} />
        </>
      )}
    </>
  );
};

export const descAbout = () => {
  return (
    <article className={s.descAboutWrapper}>
      <h1 className={s.bold}>안녕하세요, 광대숲 개발자입니다.</h1>
      <p>
        광대숲은 저희 학교만의 익명 커뮤니티를 만들고 운영하며 학교 사람들이
        담아두기만 하던 어려운 이야기부터 사소하고 조그만 이야기까지 함께
        나눴으면 하는 마음으로 개발을 시작하게 되었습니다.
      </p>
      <h2 className={s.title}>자주 묻는 말</h2>
      <h3 className={s.bold}>Q. 광대숲이란 무엇인가요?</h3>
      <p className={s.answer}>
        A. 광대숲은 “광주소프트웨어마이스터고등학교"의 대나무 숲으로써 익명으로
        사람들과 소통할 수 있는 익명 커뮤니티입니다.
      </p>
      <h3 className={s.bold}>Q. 댓글을 달 순 없나요?</h3>
      <p className={s.answer}>
        A. 댓글 기능이 없는 이유는, 댓글의 여론이 좋지 않아 게시글로 자신만의
        이야기를 쉬이 나눌 수 없는 환경을 예방하기 위함입니다.
      </p>
      <h3 className={s.bold}>Q. 글에 반응을 달고 싶어요.</h3>
      <p className={s.answer}>
        A. 각 알고리즘들에 반응을 표시하기 위해 이모지를 다는 방안을 검토 중에
        있습니다.
      </p>
      <h3 className={s.bold}>Q. 내 의견을 찾을 수 없어요.</h3>
      <p className={s.answer}>
        A. 광대숲은 모든 글이 관리자의 허가를 맡아서 올라가기에 올라갈 때 시간이
        걸릴 수 있습니다. 또한 부적절한 내용으로 검토 및 삭제가 되었을 수
        있습니다. 자세한 사항은{" "}
        <Link href={"/rule"}>
          <span className={s.href}>규칙</span>
        </Link>
        을 참고해주세요.
      </p>
      <h1 className={s.title}>문의</h1>
      <p>
        <span>
          Github :
          <a href="https://github.com/joog-lim"> https://github.com/joog-lim</a>
        </span>
        <br />
        <span>
          Discord :{" "}
          <a href="https://discord.gg/x4Qq9Xr8F2">
            https://discord.gg/x4Qq9Xr8F2
          </a>
        </span>
        <br />
        <span>mail : jooglim.org@gmail.com</span>
      </p>
    </article>
  );
};

export const descRule = () => {
  return (
    <article className={s.descAboutWrapper}>
      <div>
        <h2 className={s.title}>제 1조 목적</h2>본 규칙은
        광주소프트웨어마이스터고등학교 대나무숲 규칙으로, 대나무숲의 투명한 운영
        및 익명성 보장을 목적으로 한다.
        <h2 className={s.title}>제 2조 게시글</h2>
        <h3 className={s.title}>게시에 관한 규칙 제 1항:</h3>
        <article className={s.answer}>
          <span>
            다음과 같은 게시물의 경우 반려 처리가 되거나, 삭제가 될 수 있다.
          </span>
          <h4 className={s.bold}>1. 친목을 다지기 위한 게시글일 경우</h4>
          <h4 className={s.bold}>2. 홍보를 목적으로 하는 경우</h4>
          <ul className={s.answer}>
            <li>매우 개인적인 사항들로, 앱 추천인이나 게임 추천인 같은 경우</li>
            <li>많은 사람들에게 불편함을 안겨주는 홍보인 경우</li>
          </ul>
          <h4 className={s.bold}>
            3. 특정 인물이나 단체를 지칭하거나 거론하는 경우
          </h4>
          <ul className={s.answer}>
            <li>지칭하거나 거론하여 비방하는 경우</li>
            <li>지칭하거나 거론하여 반복되는 게시글이 올라오는 경우</li>
          </ul>
          <h4 className={s.bold}>4. 욕설 및 비속어를 포함하는 경우</h4>
          <h4 className={s.bold}>5. 공격적인 어조로 작성한 경우</h4>
          <h4 className={s.bold}>
            6. 거래, 설문조사, 분실물 회수 또는 구인/구직을 목적으로 하는 경우
          </h4>
          <h4 className={s.bold}>
            7. 정치/종교 등 논란을 불러일으킬 여지가 있는 경우
          </h4>
          <h4 className={s.bold}>
            8. 타 고등학교 또는 학교를 비방, 비난하는 경우
          </h4>
          <h4 className={s.bold}>9. 지나치게 길거나 지나치게 짧은 경우</h4>
          <div className={s.answer}>두페이지 정도를 잡아먹는 경우</div>
          <div className={s.answer}>한문장도 완성시키지 못하는 경우</div>
          <h4 className={s.bold}>10. 제보 반려 사유를 묻는 게시글일 경우</h4>
          <h4 className={s.bold}>11. 분란을 조장하는 경우</h4>
          <h4 className={s.bold}>
            12. 관리자의 판단 아래, 반절 이상의 관리자들이 문제가 있다고 판단한
            경우
          </h4>
          <h4 className={s.bold}>13. 도배성 게시글일 경우</h4>
        </article>
        <h3 className={s.title}>
          제 2항: 제 2조 1항 2호에 해당하는 게시글이 공익을 목적으로 하는 고발성
          제보일 경우,
          <br />
          <br />
          관리자들의 회의 아래 게시될 수 있다. 단 다음 기준들이 엄격히 적용된다.
        </h3>
        <article className={s.answer}>
          <h4 className={s.bold}>
            1. 실명 거론의 경우 초성처리나 블라인드 처리로 수정된다.
          </h4>
          <h4 className={s.bold}>
            2. 육하원칙에 의거하여 작성되어있어야 한다.
          </h4>
          <h4 className={s.bold}>3. 추측성 내용이 포함되어있으면 안된다.</h4>
          <h4 className={s.bold}>4. 사실만 포함되어 있어야 한다.</h4>
          <h4 className={s.bold}>5. 비약적인 논리 전개가 있으면 안된다.</h4>
        </article>
        <h3 className={s.title}>
          제 3항: 이 외에 제 2조 1항의 기준에 해당되는 제보더라도,
          <br />
          <br />
          관리자의 재량으로 게시글이 게시될 수 있다. 단, 다음 기준들이 적용된다.
        </h3>
        <article className={s.answer}>
          <h4 className={s.bold}>
            1. 홍보를 목적으로 하는 게시글일 경우, 디스코드 대나무 숲 서버를
            통해 관리자에게 문의를 통해 사전 허가를 받아야 한다.
          </h4>
          <h4 className={s.bold}>
            2. 설문조사를 목적으로 하는 게시글일 경우, 디스코드 대나무 숲 서버를
            통해 관리자에게 문의를 통해 사전 허가를 받아야 한다.
          </h4>
        </article>
        <h3 className={s.title}>
          제 3조 특정 이슈로 인한 과열에 관한 규칙 제 1항:
        </h3>
        <p className={s.answer}>
          특정 이슈로 대나무숲이 과열이 되는 조짐을 보일 경우, 관리자들의
          자체적인 판단에 따라, 해당 주제에 관한 제보 업로드를 보류하는
          시스템으로, 관리자의 판단 하에 공지 없이 시행될 수 있다. 해당 이슈에
          관한 글들은 일정 시간이 지난 이후에 하나의 게시글로 묶여 업로드 된다.
        </p>
      </div>
    </article>
  );
};
