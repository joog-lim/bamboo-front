import HeadingPresenter from "components/heading/headingPresenter";

// inner interface
interface descHeadingProps {
  descType: string,
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
    <HeadingPresenter
        heading={ headingObj[descType] }
        explanation={ explanationObj[descType] }
    />
  );
}