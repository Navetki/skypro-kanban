import { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { deleteTask, putTask } from "../../../services/api";
import Calendar from "../../Calendar/Calendar";
import { toast } from "react-toastify";
import PopDeleteConfirm from "../PopDeleteConfirm/PopDeleteConfirm";

import { AuthContext } from "../../../contexts/AuthContext";
import { TaskContext } from "../../../contexts/TaskContext";

const allStatuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function PopBrowse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { cards, setCards } = useContext(TaskContext);
  const currentCard = cards.find((card) => card._id === id);

  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const [editedTask, setEditedTask] = useState({
    title: currentCard?.title || "",
    description: currentCard?.description || "",
    topic: currentCard?.topic || "",
    status: currentCard?.status || "",
    date: currentCard?.date ? new Date(currentCard.date) : new Date(),
  });

  const handleDeleteTask = async () => {
    try {
      setIsSubmitting(true);
      const data = await deleteTask({ token: user.token, id });
      setCards(data.tasks);
      toast.success("Задача успешно удалена");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Не удалось удалить задачу");
    } finally {
      setIsSubmitting(false);
      setIsDeleteConfirmOpen(false);
    }
  };

  const handleEditTask = async () => {
    if (!editedTask.description.trim()) {
      toast.warning("Описание не может быть пустым");
      return;
    }

    try {
      setIsSubmitting(true);
      const data = await putTask({
        token: user.token,
        id,
        taskData: editedTask,
      });
      setCards(data.tasks);
      toast.success("Изменения сохранены!");
      setIsEditing(false);
    } catch (err) {
      toast.error(err.message || "Ошибка при сохранении");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!currentCard) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        Задача не найдена...
      </div>
    );
  }

  return (
    <div className="pop-browse" style={{ display: "block" }}>
      {/* КРАСИВАЯ МОДАЛКА ВМЕСТО АЛЕРТА */}
      {isDeleteConfirmOpen && (
        <PopDeleteConfirm
          onConfirm={handleDeleteTask}
          onCancel={() => setIsDeleteConfirmOpen(false)}
        />
      )}

      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{currentCard.title}</h3>
              <div
                className={`categories__theme _active-category ${
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
                {isEditing ? (
                  allStatuses.map((status) => (
                    <div
                      key={status}
                      className={`status__theme ${editedTask.status === status ? "_gray" : "_empty"}`}
                      onClick={() =>
                        setEditedTask({ ...editedTask, status: status })
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <p
                        className={editedTask.status === status ? "_gray" : ""}
                      >
                        {status}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="status__theme _gray">
                    <p className="_gray">{currentCard.status}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form className="pop-browse__form form-browse">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    readOnly={!isEditing}
                    value={editedTask.description}
                    onChange={(e) =>
                      setEditedTask({
                        ...editedTask,
                        description: e.target.value,
                      })
                    }
                    placeholder="Описание задачи..."
                  ></textarea>
                </div>
              </form>

              <Calendar
                selectedDate={editedTask.date}
                setSelectedDate={(date) =>
                  isEditing && setEditedTask({ ...editedTask, date })
                }
              />
            </div>

            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                {!isEditing ? (
                  <>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="btn-browse__edit _btn-bor _hover03"
                    >
                      Редактировать задачу
                    </button>
                    <button
                      onClick={() => setIsDeleteConfirmOpen(true)}
                      disabled={isSubmitting}
                      className="btn-browse__delete _btn-bor _hover03"
                    >
                      Удалить задачу
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleEditTask}
                      disabled={isSubmitting}
                      className="btn-browse__edit _btn-bg _hover01"
                    >
                      {isSubmitting ? "Сохранение..." : "Сохранить"}
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="btn-browse__delete _btn-bor _hover03"
                    >
                      Отмена
                    </button>
                  </>
                )}
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
