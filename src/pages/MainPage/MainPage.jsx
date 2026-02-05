import { useState, useEffect, useContext } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../services/api";

//import * as S from "../../App.styled";
import "../../App.css";

import { AuthContext } from "../../contexts/AuthContext";
import { TaskContext } from "../../contexts/TaskContext";

export default function MainPage() {
  const { user } = useContext(AuthContext);
  const { cards, setCards } = useContext(TaskContext);
  const [isLoading, setIsLoading] = useState(user?.token ? true : false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.token) return;

    getTasks({ token: user.token })
      .then((data) => {
        setError(null);
        setCards(data.tasks);
      })

      .catch((error) => {
        setError(error.message);
      })

      .finally(() => {
        setIsLoading(false);
      });
  }, [user, setCards]);

  return (
    <>
      <Header />

      <main className="main">
        {isLoading ? (
          <div className="loader">...</div>
        ) : (
          <>
            <Main cards={cards} />

            {error && <div className="error-message">{error}</div>}
          </>
        )}
      </main>

      <Outlet />
    </>
  );
}
