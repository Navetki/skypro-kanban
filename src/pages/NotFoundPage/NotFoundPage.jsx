import { Link } from "react-router-dom";
import * as S from "../LoginPage/LoginPage.styled";

export default function NotFoundPage() {
  return (
    <S.Wrapper>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtl>
            <h2>404</h2>
          </S.ModalTtl>
          <p>Страница не найдена</p>
          <Link
            to="/"
            style={{ color: "#565EEF", marginTop: "20px", display: "block" }}
          >
            Вернуться на главную
          </Link>
        </S.ModalBlock>
      </S.Modal>
    </S.Wrapper>
  );
}
