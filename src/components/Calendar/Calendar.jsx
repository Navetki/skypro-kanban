import CalendarLib from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Calendar({ selectedDate, setSelectedDate }) {
  const { isDark } = useContext(ThemeContext);

  const textColor = { color: isDark ? "#FFFFFF" : "#000000" };
  const subTextColor = { color: "#94A6BE" };

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl" style={textColor}>
        Даты
      </p>

      <div className="calendar__block">
        <CalendarLib
          className="custom-calendar"
          onChange={setSelectedDate}
          value={selectedDate}
          locale="ru-RU"
          showNeighboringMonth={false}
          prev2Label={null}
          next2Label={null}
          prevLabel="<"
          nextLabel=">"
          formatShortWeekday={(locale, date) =>
            ["вс", "пн", "вт", "ср", "чт", "пт", "сб"][date.getDay()]
          }
        />

        <div className="calendar__period">
          <p className="calendar__p date-end" style={subTextColor}>
            Срок исполнения{" "}
            <span className="date-control" style={textColor}>
              {selectedDate
                ? selectedDate.toLocaleDateString("ru-RU")
                : "Выберите дату"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
