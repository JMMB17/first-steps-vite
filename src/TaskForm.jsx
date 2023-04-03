import { useState, useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { CreateTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // para evitar que se recargue la pagina constantemente cada click
    CreateTask({ titulo: title, descripcion: descripcion });
    setTitle(""); // para que el input de titulo se limpie
    setDescripcion(""); // para que el input de descripcion se limpie
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mt-4">
        <h1 className="txt-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title} // ademas de limpiar los campos en el evento enviar, esto tambien es necesario para que el input de titulo se limpie
          autoFocus
          className="bg.slategrey-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe una descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion} // ademas de limpiar los campos en el evento enviar, esto tambien es necesario para que el input de descripcion se limpie
          className="bg.slategrey-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Agregar</button>
      </form>
    </div>
  );
}

export default TaskForm;
