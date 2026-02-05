// модальное окно для просмотра

import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deleteTask } from "../../../services/api";
import Calendar from "../../Calendar/Calendar";

import { AuthContext } from "../../../contexts/AuthContext";
import { TaskContext } from "../../../contexts/TaskContext";

export default function PopBrowse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { cards, setCards } = useContext(TaskContext);

  const currentCard = cards.find((card) => card._id === id);

  const handleDeleteTask = async () => {
    try {
      const data = await deleteTask({ token: user.token, id });
      setCards(data.tasks);
      navigate("/");
    } catch (err) {
      alert("Не удалось удалить: " + err.message);
    }
  };

  if (!currentCard) return null;

  return (
    <div className="pop-browse" style={{ display: "block" }}>
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{currentCard.title}</h3>

              <div
                className={`categories__theme theme-top _active-category ${
                  currentCard.topic === "Web Design"
                    ? "_orange"
                    : currentCard.topic === "Research"
                      ? "_green"
                      : "_purple"
                }`}
              >
                <p>{currentCard.topic}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _gray">
                  <p className="_gray">{currentCard.status}</p>
                </div>
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly={true}
                    defaultValue={currentCard.description} // Подставляем реальное описание
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>

            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  Редактировать задачу
                </button>
                <button
                  onClick={handleDeleteTask}
                  className="btn-browse__delete _btn-bor _hover03"
                >
                  Удалить задачу
                </button>
              </div>
              <Link to="/">
                <button className="btn-browse__close _btn-bg _hover01">
                  Закрыть
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
