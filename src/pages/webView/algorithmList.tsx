import AlgorithmList from "src/components/algorithmList/algorithmsList";
import styles from "styles/wrap.module.scss";
import HeadingPresenter from "components/heading/headingPresenter";

const AlgorithmListView: React.FC = () => {
  return (
    <section className={styles.wrap}>
      <HeadingPresenter
        heading={"모두에게 하고픈 말,"}
        explanation={"무엇인가요?"}
      />
      <AlgorithmList />
    </section>
  );
};

export default AlgorithmListView;
