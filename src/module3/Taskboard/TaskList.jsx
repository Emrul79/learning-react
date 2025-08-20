import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
