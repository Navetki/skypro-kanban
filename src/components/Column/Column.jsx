// загловок и список карточек

import Card from "../Card/Card.jsx";
import * as S from "./Column.styled";

export default function Column({ title, cardList }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cardList
          .filter((card) => card.status === title)
          .map((card) => (
            <Card
              key={card.id}
              id={card.id}
              topic={card.topic}
              title={card.title}
              date={card.date}
            />
          ))}
      </S.Cards>
    </S.MainColumn>
  );
}
