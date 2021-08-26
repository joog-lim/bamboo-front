import type { AppProps } from "next/app";
import "styles/global.scss";
import { RecoilRoot } from "recoil";
import ReactModal from "react-modal";

ReactModal.defaultStyles.overlay.backgroundColor = "#00000033";
ReactModal.defaultStyles.content.top = "50%";
ReactModal.defaultStyles.content.left = "50%";
ReactModal.defaultStyles.content.right = "auto";
ReactModal.defaultStyles.content.bottom = "auto";
ReactModal.defaultStyles.content.marginRight = "-50%";
ReactModal.defaultStyles.content.transform = "translate(-50%, -50%)";
ReactModal.defaultStyles.content.maxWidth = "50vw";
ReactModal.defaultStyles.content.maxHeight = "50vh";
ReactModal.defaultStyles.content.width = "50vw";
ReactModal.defaultStyles.content.height = "50vh";
ReactModal.defaultStyles.content.background = "#FFFFFF";
ReactModal.defaultStyles.content.borderRadius = "5px";
ReactModal.defaultStyles.content.border = "none";
ReactModal.defaultStyles.content.padding = "40px";
ReactModal.defaultStyles.content.boxSizing = "border-box";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
