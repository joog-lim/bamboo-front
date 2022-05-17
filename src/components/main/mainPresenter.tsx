import React from "react";
import s from "./main.module.scss";
import SideBar from "components/Sidebar/sidebarPresenter";
import AlgorithmList from "components/algorithmList/algorithmsList";

const MainPresenter: React.FC = () => {
  return (
    <main className={s.main}>
      <SideBar />
      <AlgorithmList />
    </main>
  );
};

export default MainPresenter;
