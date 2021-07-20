import HeaderPresenter from "components/common/headerPresenter";
import config from "constants/config.json";
import styles from "styles/wrap.module.scss";
import Head from "next/head";
import DescPresenter from "src/components/descriptions/descPresenter";

const Rule: React.FC = () => {
  return (
    <>
      <Head>
        <title>광대숲 규칙</title>
        <link rel="icon" href="/img/favicon.ico" />
        <meta name="description" content="광대숲 규칙" />
      </Head>
      <HeaderPresenter location={config.LINK.ABOUT} />
      <div className={styles.wrap}>
        <DescPresenter descType={"rule"}/>
      </div>
    </>
  );
};
export default Rule;
