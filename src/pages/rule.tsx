import HeaderPresenter from "components/common/headerPresenter";
import config from "constants/config.json";

import Head from "next/head";

const Rule: React.FC = () => {
  return (
    <>
      <Head>
        <title>광대숲</title>
        <meta name="description" content="광대숲" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <HeaderPresenter location={config.LINK.ABOUT} />
    </>
  );
};
export default Rule;
