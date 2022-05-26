import React from "react";
import SideBar from "components/Sidebar/sidebarPresenter";
import AlgorithmList from "components/algorithmList/algorithmsList";
import s from "./main.module.scss";

const MainPresenter: React.FC = () => {
  return (
    <main className={s.main}>
      <SideBar />
      <AlgorithmList />
    </main>
  );
};

export default MainPresenter;
