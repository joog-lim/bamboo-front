import AlgorithmList from "src/components/algorithmList/algorithmsList";
import styles from "styles/wrap.module.scss";

const AlgorithmListView: React.FC = () => {
  return (
    <section className={styles.wrap}>
      <AlgorithmList />
    </section>
  );
};

export default AlgorithmListView;
