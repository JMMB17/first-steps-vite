import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function TaskCard({ task }) {
  const { DeleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">
        {task.id}. {task.titulo}
        <p className="text-gray-500 text-sm">{task.descripcion}</p>
      </h1>
      {/* Notar que se le pasa la funcion DeleteTask y se le pasa el id de la tarea porque si le pasamos la funcion DeleteTask, se ejecutaria cada vez que se renderizara el componente y elimina todas las tareas */}
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-600"
        onClick={() => DeleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
