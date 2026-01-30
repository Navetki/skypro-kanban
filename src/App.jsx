import "./App.css";

import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.styled";
import * as S from "./App.styled";
import Header from "./components/Header/Header";

import PopUser from "./components/popups/PopUser/PopUser";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";

import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const [user, setUser] = useState(true);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <Routes>
          <Route
            path="/"
            element={user ? <MainPage /> : <Navigate to="/login" />}
          >
            <Route path="task/:id" element={<PopBrowse />} />
            <Route path="exit" element={<PopUser setUser={setUser} />} />
            <Route path="new-card" element={<PopNewCard />} />
          </Route>
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </S.Wrapper>
    </>
  );
}

export default App;
