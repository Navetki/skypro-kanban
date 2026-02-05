import { useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  return (
    <TaskContext.Provider value={{ cards, setCards }}>
      {children}
    </TaskContext.Provider>
  );
};
