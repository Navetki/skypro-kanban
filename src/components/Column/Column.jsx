import Card from "../Card/Card.jsx";
import * as S from "./Column.styled";

export default function Column({ title, cards }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cards?.map((card) => (
          <Card key={card._id} {...card} />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
}
