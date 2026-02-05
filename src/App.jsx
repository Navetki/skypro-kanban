import "./App.css";
import { GlobalStyle } from "./GlobalStyle.styled";
import * as S from "./App.styled";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import { AuthProvider } from "./contexts/AuthProvider";
import { TaskProvider } from "./contexts/TaskProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <GlobalStyle />
        <S.Wrapper>
          <AppRoutes />
        </S.Wrapper>
      </TaskProvider>
    </AuthProvider>
  );
}
export default App;
