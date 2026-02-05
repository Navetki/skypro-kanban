import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styled";
import { useState, useContext } from "react";
import { signIn } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const [error, setError] = useState(null);

  // изменения в инпутах
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginData.login.includes("@")) {
      setError("Введите корректный адрес электронной почты");
      return;
    }
    if (!loginData.password.trim()) {
      setError("Введите пароль");
      return;
    }

    try {
      const data = await signIn(loginData);
      loginUser(data.user);
      navigate("/");
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
              name="login"
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
