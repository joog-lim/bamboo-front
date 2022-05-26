import React, { useEffect } from "react";
import Link from "next/link";
import * as I from "src/assets/svg/index";
import config from "constants/config.json";
import { useSetRecoilState } from "recoil";
import { userStateState } from "recoil/atom";
import { HeaderProps } from "./headerContainer";
import S from "./header.module.scss";

import LoginModal from "../modal/loginModal/loginModaPresenterl";

const HeaderPresenter: React.FC<HeaderProps> = (p: HeaderProps) => {
  const setUserState = useSetRecoilState(userStateState);
  useEffect(() => {
    localStorage.getItem("token") &&
      setUserState(
        localStorage.getItem("isAdmin") === "true" ? "ADMIN" : "USER"
      );
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
                  <li className={S.highLight}>
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
                  <li className={S.highLight}>
                    <Link href={config.LINK.ABOUT}>더보기</Link>
                  </li>
                </>
              ),
              "/rule": (
                <>
                  <li>
                    <Link href={config.LINK.HOME}>홈</Link>
                  </li>
                  <li className={S.highLight}>
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
