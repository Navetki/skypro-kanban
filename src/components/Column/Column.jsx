// загловок и список карточек

import Card from "../Card/Card.jsx";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
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
      </div>
    </div>
  );
}
