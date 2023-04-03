import {createContext, useState, useEffect} from 'react'
import { tasks as data } from "../Data/tasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setTasks(data);
      }, []);
    function CreateTask(task) {
        setTasks([...tasks, {
          id: tasks.length + 1,
          titulo: task.titulo,
          descripcion: task.descripcion
        }]);
      }
      function DeleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id)); // Notar que react tiene que recibir otro arreglo pero sin ese elemento por eso usamos filter
      }
  return (
    <TaskContext.Provider value={{
        tasks,
        CreateTask,
        DeleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
