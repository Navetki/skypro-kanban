import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopUser from "./components/popups/PopUser/PopUser";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import { useState, useEffect } from "react";
import { cardList } from "./data";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // таймер на 2 секунды
    const timer = setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />

      {isLoading ? (
        <div className="loader">Данные загружаются...</div>
      ) : (
        <Main cards={cards} />
      )}
    </div>
  );
}

export default App;
