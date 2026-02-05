// создание задачи

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postTask } from "../../../services/api";
import Calendar from "../../Calendar/Calendar";

import { AuthContext } from "../../../contexts/AuthContext";
import { TaskContext } from "../../../contexts/TaskContext";

export default function PopNewCard() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { setCards } = useContext(TaskContext);

  const [newTask, setNewTask] = useState({
    title: "",
    topic: "Web Design",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!newTask.title.trim()) {
      alert("Введите название задачи");
      return;
    }

    try {
      const data = await postTask({
        token: user.token,
        taskData: { ...newTask, date: new Date() },
      });

      setCards(data.tasks);
      navigate("/");
    } catch (err) {
      alert("Ошибка при создании задачи: " + err.message);
    }
  };

  return (
    <div className="pop-new-card">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to="/" className="pop-new-card__close">
              ✖
            </Link>

            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" id="formNewCard">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    value={newTask.description}
                    onChange={handleInputChange}
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div
                  className={`categories__theme _orange ${newTask.topic === "Web Design" ? "_active-category" : ""}`}
                  onClick={() =>
                    setNewTask({ ...newTask, topic: "Web Design" })
                  }
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div
                  className={`categories__theme _green ${newTask.topic === "Research" ? "_active-category" : ""}`}
                  onClick={() => setNewTask({ ...newTask, topic: "Research" })}
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  className={`categories__theme _purple ${newTask.topic === "Copywriting" ? "_active-category" : ""}`}
                  onClick={() =>
                    setNewTask({ ...newTask, topic: "Copywriting" })
                  }
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>

            <button onClick={handleFormSubmit} type="button">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
