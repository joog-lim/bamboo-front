import { useRecoilValue } from "recoil";

import s from "./header.module.scss";
import { HeaderProps, getDate } from "./headerContainer";
import AlgorithmModal from "components/modal/AlgorithmModal/AlgorithmModalPresenter";
import { hasTokenState } from "recoil/atom";
import Algorithm from "src/utils/api/algorithm";
import { AxiosResponse } from "axios";
import { setStatusRes } from "types/api";

const Header: React.FC<HeaderProps> = (p: HeaderProps) => {
  const { isAdmin } = useRecoilValue(hasTokenState);

  const setStatusAlgorithm = () => {
    Algorithm.setStatusAlgorithm(p.id).then(
      (res: AxiosResponse<setStatusRes> | void) => {
        res?.status === 200
          ? alert("성공적으로 수정되었습니다.")
          : alert("실패하였습니다.");
      }
    );
  };

  return (
    <header className={s.header}>
      <div>
        <h3>
          {p.status === "PENDING" ? <>{p.id}</> : <>#{p.number}번째</>}
          {isAdmin
            ? {
                PENDING: " 대기 중",
                ACCEPTED: " 알고리즘",
                REJECTED: " 거절됨",
                DELETED: " 삭제 요청됨",
              }[p.status]
            : " 알고리즘"}
        </h3>
        <p>{getDate(p.createdAt)}</p>
      </div>
      <div>
        <p>#{p.tag}</p>
        {isAdmin &&
          {
            PENDING: (
              <>
                <button onClick={setStatusAlgorithm}>수락</button>
                <AlgorithmModal
                  isRed={false}
                  isHeading={false}
                  isReason
                  algorithmId={p.id}
                  title={p.title}
                  content={p.content}
                >
                  수정
                </AlgorithmModal>
                <AlgorithmModal
                  isRed
                  isHeading
                  isReason={false}
                  algorithmId={p.id}
                >
                  거절
                </AlgorithmModal>
              </>
            ),
            ACCEPTED: (
              <>
                <AlgorithmModal
                  isRed={false}
                  isHeading={false}
                  isReason
                  algorithmId={p.id}
                  title={p.title}
                  content={p.content}
                >
                  수정
                </AlgorithmModal>
                <AlgorithmModal
                  isRed
                  isHeading
                  isReason={false}
                  algorithmId={p.id}
                >
                  삭제
                </AlgorithmModal>
              </>
            ),
            REJECTED: <button onClick={setStatusAlgorithm}>거절취소</button>,
            DELETED: (
              <>
                <AlgorithmModal
                  isRed
                  isHeading
                  isReason={false}
                  algorithmId={p.id}
                >
                  삭제
                </AlgorithmModal>
                <button onClick={setStatusAlgorithm}>기각</button>
              </>
            ),
          }[p.status]}
        {!isAdmin && (
          <AlgorithmModal isRed isHeading isReason={false} algorithmId={p.id}>
            신고
          </AlgorithmModal>
        )}
      </div>
    </header>
  );
};

export default Header;
