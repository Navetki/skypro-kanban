import Column from "../Column/Column.jsx";

export default function Main({ cards }) {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column key={status} title={status} cardList={cards} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
