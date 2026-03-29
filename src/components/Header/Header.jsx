import { useState, useContext } from "react";
import { Container } from "../../App.styled";
import * as S from "./Header.styled";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header() {
  const { user } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);
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

                  <input
                    type="checkbox"
                    name="checkbox"
                    checked={isDark}
                    onChange={toggleTheme}
                  />
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
