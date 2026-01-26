import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopUser from "./components/popups/PopUser/PopUser";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";

function App() {
  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
}

export default App;
