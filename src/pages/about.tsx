import HeaderPresenter from "components/common/headerPresenter";
import config from "constants/config.json";
import styles from "styles/wrap.module.scss";
import Head from "next/head";
import DescPresenter from "src/components/descriptions/descPresenter";
import { useRouter } from "next/router";

const About: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>광주소프트웨어마이스터고등학교 대나무숲 더보기</title>
        <meta
          name="description"
          content="광주소프트웨어마이스터고등학교 대나무숲의 더보기 페이지입니다."
        />
        {/* 오픈그래프 */}
        <meta
          property="og:title"
          content="광주소프트웨어마이스터고등학교 대나무숲 더보기 페이지"
        />
        <meta
          property="og:description"
          content="광주소프트웨어마이스터고등학교 대나무숲의 더보기 페이지입니다."
        />
        <meta property="og:url" content="https://joog-lim.info/about" />
      </Head>
      {router.query.webView !== "mobile" && (
        <HeaderPresenter location={config.LINK.ABOUT} />
      )}
      <div className={styles.wrap}>
        <DescPresenter descType={"about"} />
      </div>
    </>
  );
};
export default About;
