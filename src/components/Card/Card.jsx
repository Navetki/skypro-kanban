import * as S from "./Card.styled";
import { Link } from "react-router-dom";

export default function Card({ topic, title, date, id }) {
  return (
    <S.CardsItem>
      <S.CardsContainer>
        <S.CardGroup>
          <S.CardTheme $topic={topic}>
            <p>{topic}</p>
          </S.CardTheme>

          <Link to={`/card/${id}`}>
            <S.CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </S.CardBtn>
          </Link>
        </S.CardGroup>
        <S.CardContent>
          <Link to={`/card/${id}`}>
            <S.CardTitle>{title}</S.CardTitle>
          </Link>
          <S.CardDate>
            <S.CardDateSvg viewBox="0 0 13 13">
              <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" />
              <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125M9.75 1.21875V2.03125" />
            </S.CardDateSvg>
            <p>{date}</p>
          </S.CardDate>
        </S.CardContent>
      </S.CardsContainer>
    </S.CardsItem>
  );
}
