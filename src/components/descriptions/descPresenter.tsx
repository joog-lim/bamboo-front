import s from "./desc.module.scss";
import * as c from "./descContainer";

const DescPresenter: React.FC<{ desc: c.descType }> = ({ desc }) => {
  return (
    <main className={s.main}>
      <c.DescHeading desc={desc} />
      <section className={s.descContentWrapper}>
        {
          {
            about: <c.DescAbout />,
            rule: <c.DescRule />,
          }[desc]
        }
      </section>
    </main>
  );
};

export default DescPresenter;
