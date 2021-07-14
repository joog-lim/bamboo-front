import HeadingPresenter from "components/heading/headingPresenter";

// inner interface
interface descHeadingProps {
  descType: string,
}

export const descHeading: React.FC<descHeadingProps> = (
    p: descHeadingProps
) => {
  return (
    <HeadingPresenter
        heading={
            {
                about: "안녕하세요! 이곳은",
                rule: "규칙"
            }[p.descType]
        }
        explanation={
            {
                about: "광대숲입니다!",
                rule: null
            }[p.descType]
        }
    />
  );
}