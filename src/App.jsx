import AppRoutes from "./components/AppRoutes/AppRoutes";
import { AuthProvider } from "./contexts/AuthProvider";
import { TaskProvider } from "./contexts/TaskProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { useContext } from "react";
import { GlobalStyle } from "./GlobalStyle.styled";
import "./App.css";
import * as S from "./App.styled";
import { ThemeContext } from "./contexts/ThemeContext";
import "./App_dark-theme.css";

function AppContent() {
  const { isDark } = useContext(ThemeContext);
  return (
    <S.Wrapper className={isDark ? "dark-theme" : ""}>
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme={isDark ? "dark" : "colored"}
      />
    </S.Wrapper>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TaskProvider>
          <AppContent />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;
