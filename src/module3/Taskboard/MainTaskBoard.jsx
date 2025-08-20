import React, { useReducer } from "react";
import taskReducer from "../Reducer/myReducer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "./data";
export default function MainTaskBoard() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  //getUniqeId
  const nextIdFucntion = (data) => {
    const maxid = data.reduce(
      (prev, curr) => (prev.id && prev.id > curr.id ? prev.id : curr.id),
      0
    );

    return maxid + 1;
  };

  //all handler
  const handleAddTask = (taskText) => {
    dispatch({
      type: "added",
      taskText,
      id: nextIdFucntion(tasks),
    });
  };

  const handleEditFunc = (task) => {
    dispatch({
      type: "changed",
      task,
    });
    //
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "delete",
      id: taskId,
    });
  };
  return (
    <div className="p-20 bg-gray-900 h-screen">
      <div>
        <h1 className="p-5 text-white text-4xl font-bold">
          This is a daily life Taskboard
        </h1>
        <AddTask onAddTask={handleAddTask} />
        {tasks.length < 1 ? (
          <h1 className="p-5 text-red-700 text-2xl font-bold">
            {" "}
            Tasklist is Empty, Add Some
          </h1>
        ) : (
          <TaskList
            tasks={tasks}
            onEdit={handleEditFunc}
            onDelete={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
}
