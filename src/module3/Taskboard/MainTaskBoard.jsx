import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "./data";
export default function MainTaskBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  //all handler
  const handleAddTask = (taskText) => {};
  return (
    <div className="p-20 bg-gray-600 h-screen">
      <div>
        <h1 className="text-3xl">This is a daily life Taskboard</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
