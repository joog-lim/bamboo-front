import { useRecoilValue } from "recoil";

import s from "./header.module.scss";
import { HeaderProps } from "./headerContainer";
import AlgorithmModal from "components/modal/AlgorithmModal/AlgorithmModalPresenter";
import { isAdminState } from "recoil/atom";
import Post from "utils/api/post";

const Header: React.FC<HeaderProps> = (p: HeaderProps) => {
  const isAdmin = useRecoilValue(isAdminState);

  const setStatusPost = () => {
    Post.setStatusPost(p.id).then((res: { status: number }) => {
      console.log(res);
      res.status == 200
        ? alert("성공적으로 수정되었습니다.")
        : alert("실패하였습니다.");
    });
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
        <p>2022년 5월 30일 새벽</p>
      </div>
      <div>
        <p>#{p.tag}</p>
        {isAdmin &&
          {
            PENDING: (
              <>
                <button onClick={setStatusPost}>수락</button>
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
            REJECTED: <button onClick={setStatusPost}>거절취소</button>,
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
