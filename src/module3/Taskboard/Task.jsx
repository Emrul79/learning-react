import React, { useState } from "react";

export default function Task({ task }) {
  const [isEditing, setisEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input />
        <button>save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.title}
        <button>save</button>
      </>
    );
  }

  return (
    <div>
      <input type="checkbox" className="w-20" />
      {taskContent}
      <button className="p-1 border border-black mt-10 text-black  text-xl rounded-md bg-red-800">
        delete
      </button>
    </div>
  );
}
