import HeaderPresenter from "src/components/common/headerPresenter";
import MainPresenter from "src/components/main/mainPresenter";
import styles from "styles/wrap.module.scss";

import config from "constants/config.json";

const Main: React.FC = () => {
  return (
    <>
      <HeaderPresenter location={config.LINK.HOME} />
      <div className={styles.wrap}>
        <MainPresenter />
      </div>
    </>
  );
};
export default Main;
