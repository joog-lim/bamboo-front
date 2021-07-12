import HeaderPresenter from "src/components/common/headerPresenter";
import IndexPresenter from "components/index/indexPresenter";
import styles from "styles/wrap.module.scss";

import config from "constants/config.json";

import Head from "next/head";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>광대숲</title>
        <link rel="icon" href="/img/favicon.ico" />
        <meta name="description" content="광대숲" />
      </Head>
      <HeaderPresenter location={config.LINK.HOME} />
      <div className={styles.wrap}>
        <IndexPresenter />
      </div>
    </>
  );
};
export default Index;
