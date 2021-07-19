import style from "./style.module.scss";
import Header from "./item/headerPresenter";

const Algorithms: React.FC = () => {
  return (
    <article className={style.algorithmsBox}>
      <Header state="" />
      <h4>오늘은 뭐할까</h4>
      <p>
        오늘은 뭐할까. 무슨 이상한 이 피그마는 자꾸 내가 쓰는 글 못 알아먹기만
        하고 난 디자이너가 아닌데 귀찮기만 하고, 하하하하하하오늘은 뭐할까. 무슨
        이상한 이 피그마는 자꾸 내가 쓰는 글 못 알아먹기만 하고 난 디자이너가
        아닌데 귀찮기만 하고, 하하하하하하 아니 내가 왜 이걸 하고 있냐고아니
        내가 왜 이걸 하고 있냐고아니 내가 왜 이걸 하고 있냐고아니 내가 왜 이걸
        하고 있냐고아니 내가 왜 이걸 하고 있냐고아니 내가 왜 이걸 하고 있냐고
      </p>
    </article>
  );
};

export default Algorithms;
