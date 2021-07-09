import s from "./heading.module.scss";
import { headingPresenterProps } from "./headingContainer";

const HeadingList: React.FC<headingPresenterProps> = (
  p: headingPresenterProps
) => {
  return (
    <h2 className={s.headingBox}>
      <div className={s.heading}>{p.heading}</div>
      <div className={s.explanation}>{p.explanation}</div>
    </h2>
  );
};

export default HeadingList;
