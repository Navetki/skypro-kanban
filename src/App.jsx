import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopUser from "./components/popups/PopUser/PopUser";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import { useState, useEffect } from "react";
import { cardList } from "./data";
import { GlobalStyle } from "./GlobalStyle.styled";
import * as S from "./App.styled";
import { Routes, Route } from "react-router-dom";

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
    <>
      <GlobalStyle />
      <S.Wrapper>
        <PopBrowse />

        <Header />

        {isLoading ? (
          <div className="loader">Данные загружаются...</div>
        ) : (
          <Routes>
            <Route path="/" element={<Main cards={cards} />}>
              <Route path="new-card" element={<PopNewCard />} />
              <Route path="exit" element={<PopUser />} />
              <Route path="task/:id" element={<PopBrowse />} />
            </Route>
          </Routes>
        )}
      </S.Wrapper>
    </>
  );
}

export default App;
