// загловок и список карточек

import Card from "../Card/Card.jsx";

export default function Column({ title }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card
          theme="Web Design"
          themeClass="_orange"
          title="Название задачи"
          date="30.10.23"
        />
        <Card
          theme="Copywriting"
          themeClass="_purple"
          title="Название задачи"
          date="30.10.23"
        />
        <Card
          theme="Research"
          themeClass="_green"
          title="Название задачи"
          date="30.10.23"
        />
      </div>
    </div>
  );
}
