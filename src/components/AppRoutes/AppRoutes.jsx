import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import PopUser from "../popups/PopUser/PopUser";
import PopNewCard from "../popups/PopNewCard/PopNewCard";
import PopBrowse from "../popups/PopBrowse/PopBrowse";

export default function AppRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user ? <MainPage /> : <Navigate to="/login" />}>
        <Route path="exit" element={<PopUser />} />
        <Route path="new-card" element={<PopNewCard />} />
        <Route path="card/:id" element={<PopBrowse />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
