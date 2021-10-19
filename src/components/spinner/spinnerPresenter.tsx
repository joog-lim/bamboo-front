import { Spinner } from "src/assets/svg";
import s from "./spinner.module.scss";
import { spinnerBarProps } from "./spinnerContainer";

const SpinnerBar: React.FC<spinnerBarProps> = (p: spinnerBarProps) => {
  return (
    <div className={p.background ? s.background_spinner : s.spinner}>
      <Spinner />
    </div>
  );
};

export default SpinnerBar;
