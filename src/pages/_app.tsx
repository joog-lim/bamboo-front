import type { AppProps } from "next/app";
import "styles/global.scss";
import { RecoilRoot } from "recoil";
import ReactModal from "react-modal";
import { defaultStyles } from "components/modal/modal";

ReactModal.setAppElement("#__next");
ReactModal.defaultStyles = defaultStyles;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
