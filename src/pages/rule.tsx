import HeaderPresenter from "components/common/headerPresenter";
import config from "constants/config.json";

import Head from "next/head";

const Rule: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="description" content="광대숲 규칙" />
      </Head>
      <HeaderPresenter location={config.LINK.ABOUT} />
    </>
  );
};
export default Rule;
