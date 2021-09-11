import type { AppProps } from "next/app";
import "styles/global.scss";
import { RecoilRoot } from "recoil";
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

ReactModal.defaultStyles = {
  overlay: {
    zIndex: 3,
    position: "fixed",
    inset: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000033",
  },
  content: {
    zIndex: 3,
    inset: "40px",
    overflow: "hidden",
    borderRadius: "5px",
    outline: "none",
    flexDirection: "column",
    maxWidth: "50vw",
    maxHeight: "50vh",
    width: "50vw",
    height: "50vh",
    background: "#FFFFFF",
    border: "none",
    padding: "40px",
    boxSizing: "border-box",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
