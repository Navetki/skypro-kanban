// выход из аккаунта
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function PopUser() {
  const navigate = useNavigate();
  const { logoutUser } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
    navigate("/login");
  };

  const handleStay = (e) => {
    e.preventDefault();

    navigate("/");
  };

  return (
    <div className="pop-exit" id="popExit" style={{ display: "block" }}>
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit">
            <div className="pop-exit__form-group">
              <button
                type="button"
                onClick={handleLogout}
                className="pop-exit__exit-yes _hover01"
              >
                Да, выйти
              </button>

              <button
                type="button"
                onClick={handleStay}
                className="pop-exit__exit-no _hover03"
              >
                Нет, остаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
