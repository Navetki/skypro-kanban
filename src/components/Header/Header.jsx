import { useState } from "react";
import { Container } from "../../App.styled";
import * as S from "./Header.styled";
import { Link } from "react-router-dom";

export default function Header({ user }) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnMainNew>
              <Link to="/new-card">Создать новую задачу</Link>
            </S.HeaderBtnMainNew>

            <S.HeaderUser onClick={toggleMenu}>
              {user?.name || "Пользователь"}
            </S.HeaderUser>

            {isOpened && (
              <S.PopUserSet>
                <p className="name">{user?.name || "Имя не указано"}</p>
                <p className="mail">{user?.login || "Почта не указана"}</p>

                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" name="checkbox" />
                </div>
                <button type="button">
                  <Link to="/exit">Выйти</Link>
                </button>
              </S.PopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}
