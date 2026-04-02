import Column from "../Column/Column.jsx";
import * as S from "./Main.styled";

export default function Main({ cards }) {
  return (
    <S.MainContainer>
      <S.MainBlock>
        {cards.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              fontSize: "18px",
              color: "#94A3B8",
            }}
          >
            Новых задач нет
          </div>
        ) : (
          <S.MainContent>
            <Column
              title="Без статуса"
              cards={cards.filter((c) => c.status === "Без статуса")}
            />
            <Column
              title="Нужно сделать"
              cards={cards.filter((c) => c.status === "Нужно сделать")}
            />
            <Column
              title="В работе"
              cards={cards.filter((c) => c.status === "В работе")}
            />
            <Column
              title="Тестирование"
              cards={cards.filter((c) => c.status === "Тестирование")}
            />
            <Column
              title="Готово"
              cards={cards.filter((c) => c.status === "Готово")}
            />
          </S.MainContent>
        )}
      </S.MainBlock>
    </S.MainContainer>
  );
}
