import HeadingPresenter from "components/heading/headingPresenter";
import s from "./desc.module.scss";
import Rule, { resRuleData } from "utils/api/rule";
import { useState, useEffect, Fragment } from "react";
import { AxiosResponse } from "axios";
import React from "react";
import { contactList, intro, questionList } from "src/constants/about";

export type descType = "about" | "rule";

/*
 * This component is made for descPresenter.
 * This component has a different result from the string due to prop.
 * If you want to produce another result, you can modify the object and use it.
 * props : about, rule
 */

export const DescHeading: React.FC<{ desc: descType }> = ({ desc }) => {
  const introduction = intro({
    explanation: s.explanation,
    greenLine: s.greenLine,
  })[desc];
  console.log(desc);
  return (
    <>
      <HeadingPresenter
        heading={introduction["heading"]}
        explanation={introduction["explanation"]}
      />
      {introduction["subDescription"]}
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
      {questionList.map((v) => (
        <>
          <h3 className={s.bold}>Q. {v.q}</h3>
          <p className={s.answer}>A. {v.a} </p>
        </>
      ))}
      <h1 className={s.title}>문의</h1>
      <p>
        {contactList.map((v) => (
          <>
            <span>
              {v.solution}: <a href={v.link}>{v.link}</a>
            </span>
            <br />
          </>
        ))}
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
      setRule(res?.data || null),
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
            <h2 key={content._id + "title"}>{content.title}</h2>
            <p key={content._id + "content"}>{content.content}</p>
            {content.subContent.map((content: any) => {
              return (
                <Fragment key={content._id}>
                  <h3 key={content._id + "title"}>{content.title}</h3>
                  <p key={content._id + "content"}>{content.content}</p>
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
  }
  return <div className={s.descAboutWrapper}>{element}</div>;
};
