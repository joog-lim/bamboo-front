import HeaderPresenter from "src/components/common/headerPresenter";
import MainPresenter from "src/components/main/mainPresenter";
import styles from "styles/wrap.module.scss";

import config from "constants/config.json";

import Head from "next/head";

const Main: React.FC = () => {
  return (
    <>
      <Head>
        <title>광대숲</title>
        <meta
          name="description"
          content="광주소프트웨어마이스터고등학교 대나무숲, 하고 싶던 말을 전해보세요."
        />
      </Head>
      <HeaderPresenter location={config.LINK.HOME} />
      <div className={styles.wrap}>
        <MainPresenter />
      </div>
    </>
  );
};
export default Main;
