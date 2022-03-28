import type { AppProps } from "next/app";
import "styles/global.scss";
import { RecoilRoot } from "recoil";
import ReactModal from "react-modal";
import { defaultStyles } from "components/modal/modal";
import Head from "next/head";

ReactModal.setAppElement("#__next");
ReactModal.defaultStyles = defaultStyles;

function MyApp({ Component, pageProps }: AppProps) {
  console.info(
    "%c대나무 숲 상시 채용 공고(하단 링크 클릭)",
    "background-color:#ffffff; color:#57cc4d; font-size:23px; padding: 30px 20px;"
  );

  console.info(
    "%chttps://joog-lim.notion.site/6b030590c8c744a0a1bac84f6f9f4ce8",
    "background-color:#57cc4d; color:#57cc4d; font-size:18px; padding: 15px;"
  );
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
