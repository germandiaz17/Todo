//styles
import "../styles/card-task.css";

//context
import TaskListContext from "../context/TaskListContext";
import { useContext } from "react";

const CardTask = ({ text, id, statusTask }) => {
  const { handleDelete } = useContext(TaskListContext);
  const { hanldeComplete } = useContext(TaskListContext)

  return (
    <div className="card-content">
      <h3 className={!statusTask ? "text-complete" : "text-delete"}>{text}</h3>
      <button onClick={() => hanldeComplete(id)} className={!statusTask ? "btn-complete" : "btn-marked"}>
        {!statusTask ? "Completar" : "desmarcar"}
      </button>
      <button onClick={() => handleDelete(text, id)} className="btn-delete">
        borrar
      </button>
    </div>
  );
};

export default CardTask;
