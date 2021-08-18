import style from "./header.module.scss";
import { HeaderProps } from "./headerContainer";

const Header: React.FC<HeaderProps> = (p: HeaderProps) => {
  return (
    <header className={style.header}>
      <div>
        <h3>#833번째 알고리즘</h3>
        <p>2022년 5월 30일 새벽</p>
      </div>
      <div>
        <div>#일상</div>
        <button>수락</button>
        <button>거절</button>
      </div>
    </header>
  );
};

export default Header;
