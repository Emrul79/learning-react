import React from "react";
import Task from "./Task";

export default function TaskList({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
