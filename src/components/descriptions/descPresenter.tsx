import s from "./desc.module.scss";
import * as c from "./descContainer"

const DescPresenter: React.FC<c.descPresenterProps> = (
    p: c.descPresenterProps
) => {
    return (
        <main className={s.main}>
            <c.descHeading descType={p.descType}/>
            <section className={s.descContentWrapper}>
                { 
                    {
                        about: <c.descAbout />,
                        rule: <c.descRule />
                    }
                }
            </section>
        </main>
    );
};

export default DescPresenter;