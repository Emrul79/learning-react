import React, { useState } from "react";

export default function Task({ task, onEdit, onDelete }) {
  const [isEditing, setisEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="rounded-md border border-black px-2 py-1"
          type="text"
          value={task.title}
          onChange={(e) => {
            onEdit({
              ...task,
              title: e.target.value,
            });
          }}
        />
        <button
          onClick={() => setisEditing(false)}
          className="p-1 ml-3 border border-black mt-10 text-black  text-xl rounded-md bg-green-600"
        >
          save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className="text-2xl font-semibold text-white ">{task.title}</span>
        <button
          onClick={() => setisEditing(true)}
          className="p-1 ml-3 border border-black mt-10 text-black  text-xl rounded-md bg-green-800"
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div>
      <input
        type="checkbox"
        className="w-5 h-5 mx-3 accent-green-600 cursor-pointer"
        value={task.done}
        onChange={(e) => {
          onEdit({
            ...Task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => onDelete(task.id)}
        className="p-1 ml-2 border border-black mt-10 text-black  text-xl rounded-md bg-red-800"
      >
        delete
      </button>
    </div>
  );
}
