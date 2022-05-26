import Link from "next/link";
import HeadingPresenter from "components/heading/headingPresenter";
import Rule, { resRuleData } from "utils/api/rule";
import React, { useState, useEffect, Fragment } from "react";
import { AxiosResponse } from "axios";
import SpinnerBar from "components/spinner/spinnerPresenter";
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

export const DescHeading: React.FC<descHeadingProps> = ({ descType }) => {
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

export const DescAbout: React.FC = () => {
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
      <h3 className={s.bold}>
        Q. 내 의견을 찾을 수 없어요. / 내 글이 안 보여요.
      </h3>
      <p className={s.answer}>
        A. 광대숲은 모든 글이 관리자의 허가를 맡아서 올라가기에 올라갈 때 시간이
        걸릴 수 있습니다. 또한 부적절한 내용으로 검토 및 삭제가 되었을 수
        있습니다. 자세한 사항은{" "}
        <Link href="/rule">
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

const useGetRuleContents = () => {
  const [rule, setRule] = useState<any | null>({
    data: [
      {
        content: {
          _id: 0,
          title: "대기 중",
          content: "대기 중",
          subContent: [
            {
              _id: 0,
              title: "대기 중",
              content: "대기 중",
            },
          ],
        },
      },
    ],
  });
  useEffect(() => {
    Rule.getRule().then((res: AxiosResponse<resRuleData> | void) =>
      setRule(res?.data || null)
    );
  }, []);
  return rule;
};

export const DescRule: React.FC = () => {
  const rules = useGetRuleContents();
  let element;
  if (rules?.data.content) {
    element = rules?.data.content.map((content: any) => {
      if (content.subContent) {
        return (
          <Fragment key={content._id}>
            <h2 key={`${content._id}title`}>{content.title}</h2>
            <p key={`${content._id}content`}>{content.content}</p>
            {content.subContent.map((content: any) => {
              return (
                <Fragment key={content._id}>
                  <h3 key={`${content._id}title`}>{content.title}</h3>
                  <p key={`${content._id}content`}>{content.content}</p>
                </Fragment>
              );
            })}
          </Fragment>
        );
      }
      return (
        <Fragment key={content._id}>
          <h2>{content.title}</h2>
          <p>{content.content}</p>
        </Fragment>
      );
    });
  } else {
    <SpinnerBar background={false} />;
  }
  return <div className={s.descAboutWrapper}>{element}</div>;
};
