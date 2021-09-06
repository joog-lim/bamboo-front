import HeaderPresenter from "components/common/headerPresenter";
import config from "constants/config.json";
import styles from "styles/wrap.module.scss";
import Head from "next/head";
import DescPresenter from "src/components/descriptions/descPresenter";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>광대숲 더보기</title>
        <meta name="description" content="광대숲 더보기" />
      </Head>
      <HeaderPresenter location={config.LINK.ABOUT} />
      <div className={styles.wrap}>
        <DescPresenter descType={"about"} />
      </div>
    </>
  );
};
export default About;
