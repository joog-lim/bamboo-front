import type { AppProps } from "next/app";
import "styles/global.scss";
import { RecoilRoot } from "recoil";
import ReactModal from "react-modal";
import { defaultStyles } from "components/modal/modal";
import Head from "next/head";

ReactModal.setAppElement("#__next");
ReactModal.defaultStyles = defaultStyles;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>광주소프트웨어마이스터고등학교 대나무숲</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
