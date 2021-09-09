import type { AppProps } from "next/app";
import "styles/global.scss";
import { RecoilRoot } from "recoil";
import ReactModal from "react-modal";

ReactModal.defaultStyles = {
  overlay: {
    backgroundColor: "#00000033",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "50vw",
    maxHeight: "50vh",
    width: "50vw",
    height: "50vh",
    background: "#FFFFFF",
    borderRadius: "5px",
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
