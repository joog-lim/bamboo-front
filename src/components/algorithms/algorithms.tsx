import style from "./style.module.scss";
import Header from "./item/headerPresenter";
import { AlgorithmsProps } from "./algorithmsContainer";
import { isAdminState } from "src/recoil/atom";
import { useRecoilValue } from "recoil";

const Algorithms: React.FC<AlgorithmsProps> = (p: AlgorithmsProps) => {
  const isAdmin = useRecoilValue(isAdminState);

  return (
    <article className={style.algorithmsBox}>
      <Header
        id={p.data.id}
        status={p.data.status}
        createdAt={p.data.createdAt}
        number={p.data.number}
        tag={p.data.tag}
        content={p.data.content}
        title={p.data.title}
      />
      <h4>{p.data.title}</h4>
      <p>{p.data.content}</p>
      {isAdmin &&
        {
          REJECTED: (
            <>
              <h4>거절 사유</h4> <p>{p.data.reason}</p>
            </>
          ),
          DELETED: (
            <>
              <h4>신고 사유</h4> <p>{p.data.reason}</p>
            </>
          ),
        }[p.data.status]}
    </article>
  );
};

export default Algorithms;
