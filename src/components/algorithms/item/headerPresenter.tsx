import { useRecoilValue } from "recoil";
import AlgorithmModal from "components/modal/AlgorithmModal/AlgorithmModalPresenter";
import Algorithm from "src/utils/api/algorithm";
import { AxiosResponse } from "axios";
import { setStatusRes } from "types/api";
import { currentUserStateState } from "recoil/selectors";
import { HeaderProps, getDate } from "./headerContainer";
import s from "./header.module.scss";

const Header: React.FC<HeaderProps> = (p: HeaderProps) => {
  const { isAdmin } = useRecoilValue(currentUserStateState);

  const setStatusAlgorithm = () => {
    p.setIsLoading(true);
    Algorithm.setStatusAlgorithm(p.idx).then(
      (res: AxiosResponse<setStatusRes> | void) => {
        res?.status === 200
          ? alert("성공적으로 수정되었습니다.")
          : alert("실패하였습니다.");
        p.setIsLoading(false);
      }
    );
  };

  return (
    <header className={s.header}>
      <div>
        <h3>
          #{p.number}번째
          {isAdmin
            ? {
                PENDING: " 대기 중",
                ACCEPTED: " 알고리즘",
                REJECTED: " 거절됨",
                REPORTED: " 신고됨",
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
                  algorithmIdx={p.idx}
                  title={p.title}
                  content={p.content}
                >
                  수정
                </AlgorithmModal>
                <AlgorithmModal
                  isRed
                  isHeading
                  isReason={false}
                  algorithmIdx={p.idx}
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
                  algorithmIdx={p.idx}
                  title={p.title}
                  content={p.content}
                >
                  수정
                </AlgorithmModal>
                <AlgorithmModal
                  isRed
                  isHeading
                  isReason={false}
                  algorithmIdx={p.idx}
                >
                  삭제
                </AlgorithmModal>
              </>
            ),
            REJECTED: <button onClick={setStatusAlgorithm}>거절취소</button>,
            REPORTED: (
              <>
                <AlgorithmModal
                  isRed
                  isHeading
                  isReason={false}
                  algorithmIdx={p.idx}
                >
                  삭제
                </AlgorithmModal>
                <button onClick={setStatusAlgorithm}>기각</button>
              </>
            ),
          }[p.status]}
        {!isAdmin && (
          <AlgorithmModal isRed isHeading isReason={false} algorithmIdx={p.idx}>
            신고
          </AlgorithmModal>
        )}
      </div>
    </header>
  );
};

export default Header;
