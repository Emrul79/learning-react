/* eslint-disable no-unused-vars */
import { useImmerReducer } from "use-immer";
import AddTask from "./AddTask";
import initialTasks from "./Data";
import TaskList from "./MyTaskList";
import taskReducer from "./myReducer";
export default function MainComponent() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, curr) =>
      prev && prev.id > curr.id ? prev.id : curr.id
    );

    return maxId + 1;
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: getNextId(tasks),
      text: text,
    });
  };
  const handleChangeTask = (task) => {
    dispatch({
      type: "edited",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      taskId,
    });
  };

  return (
    <div>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onEdit={handleChangeTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}
