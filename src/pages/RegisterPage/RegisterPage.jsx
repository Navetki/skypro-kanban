import { Link, useNavigate } from "react-router-dom";
import * as S from "./RegisterPage.styled";

export default function RegisterPage({ setUser }) {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setUser(true); // успешная регистрация
    navigate("/"); // на главную
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
              <S.ModalInput type="text" placeholder="Имя" required />
              <S.ModalInput type="email" placeholder="Эл. почта" required />
              <S.ModalInput type="password" placeholder="Пароль" required />

              <S.ModalBtnSignup type="submit">
                Зарегистрироваться
              </S.ModalBtnSignup>

              <S.ModalFormGroup>
                <p>Уже есть аккаунт?</p>
                <Link to="/login">Войдите здесь</Link>
              </S.ModalFormGroup>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
}
