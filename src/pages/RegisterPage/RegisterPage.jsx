import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../services/api";
import * as S from "./RegisterPage.styled";

export default function RegisterPage({ setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await signUp(formData);
      setUser(data.user);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalForm onSubmit={handleRegister}>
              <S.ModalInput
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Имя"
              />
              <S.ModalInput
                name="login"
                onChange={handleInputChange}
                type="email"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder="Пароль"
              />

              {error && <p style={{ color: "red" }}>{error}</p>}

              <S.ModalBtnSignup type="submit">
                Зарегистрироваться
              </S.ModalBtnSignup>

              <S.ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                </p>
              </S.ModalFormGroup>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
}
