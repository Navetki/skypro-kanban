export default function PopDeleteConfirm({ onConfirm, onCancel }) {
  return (
    <div className="pop-exit" style={{ display: "block" }}>
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Удалить задачу?</h2>
          </div>
          <div className="pop-exit__form">
            <div className="pop-exit__form-group">
              <button
                onClick={onConfirm}
                className="pop-exit__exit-yes _hover01"
              >
                Да, удалить
              </button>
              <button onClick={onCancel} className="pop-exit__exit-no _hover03">
                Нет, оставить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
