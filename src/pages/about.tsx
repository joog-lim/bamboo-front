import HeaderPresenter from "components/common/headerPresenter";
import config from "constants/config.json";

import Head from "next/head";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>광대숲 더보기</title>
        <meta name="description" content="광대숲 더보기" />
      </Head>
      <HeaderPresenter location={config.LINK.ABOUT} />
    </>
  );
};
export default About;
