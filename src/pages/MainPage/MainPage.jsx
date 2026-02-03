import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../services/api";
import * as S from "../../App.styled";

export default function MainPage({ user }) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(user?.token ? true : false);
  useEffect(() => {
    if (!user?.token) {
      return;
    }
    getTasks({ token: user.token })
      .then((data) => {
        setCards(data.tasks);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  return (
    <S.Wrapper>
      <Header user={user} />
      {isLoading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          Данные загружаются...
        </div>
      ) : (
        <Main cards={cards} />
      )}
      <Outlet context={{ setCards, user, cards }} />
    </S.Wrapper>
  );
}
