import Link from "next/link";
import S from "./header.module.scss";
import * as I from "src/assets/svg/index";
import { HeaderProps } from "./headerContainer";
import config from "constants/config.json";
import { useRecoilState } from "recoil";
import { hasTokenState } from "recoil/atom";

import LoginModal from "../modal/loginModal/loginModaPresenterl";
import { useEffect } from "react";

const HeaderPresenter: React.FC<HeaderProps> = (p: HeaderProps) => {
  const [_hasToken, setHasToken] = useRecoilState(hasTokenState);
  useEffect(() => {
    localStorage.getItem("token") &&
      setHasToken({
        isLogin: true,
        isAdmin: localStorage.getItem("isAdmin") === "true",
      });
  }, []);

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
                    <Link href={config.LINK.RULE}>규칙</Link>
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
                  <li>
                    <Link href={config.LINK.RULE}>규칙</Link>
                  </li>
                  <li className={S.highligth}>
                    <Link href={config.LINK.ABOUT}>더보기</Link>
                  </li>
                </>
              ),
              "/rule": (
                <>
                  <li>
                    <Link href={config.LINK.HOME}>홈</Link>
                  </li>
                  <li className={S.highligth}>
                    <Link href={config.LINK.RULE}>규칙</Link>
                  </li>
                  <li>
                    <Link href={config.LINK.ABOUT}>더보기</Link>
                  </li>
                </>
              ),
            }[p.location]
          }
          <li>
            <LoginModal />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPresenter;
