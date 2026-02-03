import { useState } from "react";
import "./App.css";
import { GlobalStyle } from "./GlobalStyle.styled";
import * as S from "./App.styled";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return <AppRoutes user={user} setUser={loginUser} logout={logoutUser} />;
}
export default App;
