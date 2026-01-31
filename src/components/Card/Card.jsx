import * as S from "./Card.styled";

export default function Card({ topic, title, date }) {
  return (
    <S.CardsItem>
      <S.CardsContainer>
        <S.CardGroup>
          <S.CardTheme $topic={topic}>
            <p>{topic}</p>
          </S.CardTheme>

          <a href="#popBrowse" target="_self">
            <S.CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </S.CardBtn>
          </a>
        </S.CardGroup>
        <S.CardContent>
          <S.CardTitle>{title}</S.CardTitle>
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
