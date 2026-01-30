import { useState, useEffect } from "react";
import { cardList } from "../../data";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loader">Данные загружаются...</div>
      ) : (
        <Main cards={cards} />
      )}
      <Outlet />
    </>
  );
}
