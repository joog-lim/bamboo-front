import s from "./desc.module.scss";
import * as c from "./descContainer";

const DescPresenter: React.FC<c.descPresenterProps> = (
  p: c.descPresenterProps
) => {
  return (
    <main className={s.main}>
      <c.DescHeading descType={p.descType} />
      <section className={s.descContentWrapper}>
        {
          {
            about: <c.DescAbout />,
            rule: <c.DescRule />,
          }[p.descType]
        }
      </section>
    </main>
  );
};

export default DescPresenter;
