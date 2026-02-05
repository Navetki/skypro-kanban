import Column from "../Column/Column.jsx";
import * as S from "./Main.styled";
import { Container } from "../../App.styled";

export default function Main({ cards }) {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column key={status} title={status} cardList={cards} />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}
