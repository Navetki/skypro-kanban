import { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./GlobalStyle.styled";
import * as S from "./App.styled";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  const [user, setUser] = useState(true);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper>
        <AppRoutes user={user} setUser={setUser} />
      </S.Wrapper>
    </>
  );
}

export default App;
