import Link from "next/link";
import S from "./header.module.scss";
import * as I from "src/assets/svg/index";
import { HeaderProps } from "./headerContainer";
import config from "constants/config.json";

import { pageState } from "recoil/atom";
import { useRecoilState } from "recoil";

const HeaderPresenter: React.FC<HeaderProps> = (p: HeaderProps) => {
  const [page, setPage] = useRecoilState(pageState);

  const changePageState = () => {
    setPage(page === "admin" ? "user" : "admin");
  };

  return (
    <header className={S.header}>
      <Link href={config.LINK.HOME}>
        <h1>
          <I.Logo />
        </h1>
      </Link>
      <nav>
        <ul className={S.nav}>
          {
            {
              "/": (
                <>
                  <li className={S.highligth}>
                    <Link href={config.LINK.HOME}>홈</Link>
                  </li>
                  <li>
                    <Link href={config.LINK.ABOUT}>더보기</Link>
                  </li>
                </>
              ),
              "/about": (
                <>
                  <li>
                    <Link href={config.LINK.HOME}>홈</Link>
                  </li>
                  <li className={S.highligth}>
                    <Link href={config.LINK.ABOUT}>더보기</Link>
                  </li>
                </>
              ),
            }[p.location]
          }
          <li>
             <button onClick={changePageState}>
              {page === "admin" ? 관리자 : 사용자}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPresenter;
