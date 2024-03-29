import { useState } from "react";

export default function Task({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onEdit({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onEdit({
              ...task,
              done: e.target.checked,
            });
          }}
        />

        {taskContent}

        <button onClick={() => onDelete(task.id)}>Delete</button>
      </label>
    </li>
  );
}
