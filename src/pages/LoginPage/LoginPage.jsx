import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styled";
import { useState } from "react";
import { signIn } from "../../services/api"; //

export default function LoginPage({ setUser }) {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const [error, setError] = useState(null);

  // изменения в инпутах
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // запрос на сервер
      const data = await signIn(loginData);

      setUser(data.user);
      navigate("/"); // на главную
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtl>
            <h2>Вход</h2>
          </S.ModalTtl>
          <S.ModalForm onSubmit={handleLogin}>
            <S.ModalInput
              name="login" // имя совпадает с ключом в стейте
              value={loginData.login}
              onChange={handleInputChange}
              type="text"
              placeholder="Эл. почта"
            />
            <S.ModalInput
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              type="password"
              placeholder="Пароль"
            />

            {error && (
              <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
            )}

            <S.ModalBtnEnter type="submit">Войти</S.ModalBtnEnter>

            <S.ModalFormGroup>
              <p>Нужно зарегистрироваться?</p>
              <Link to="/register">Регистрируйтесь здесь</Link>
            </S.ModalFormGroup>
          </S.ModalForm>
        </S.ModalBlock>
      </S.Modal>
    </S.Wrapper>
  );
}
