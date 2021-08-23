import style from "./style.module.scss";
import Header from "./item/headerPresenter";
import { AlgorithmsProps } from "./algorithmsContainer";

const Algorithms: React.FC<AlgorithmsProps> = (p: AlgorithmsProps) => {
  return (
    <article className={style.algorithmsBox}>
      <Header
        status={p.data.status}
        createdAt={p.data.createdAt}
        number={p.data.number}
      />
      <h4>{p.data.title}</h4>
      <p>{p.data.content}</p>
    </article>
  );
};

export default Algorithms;
