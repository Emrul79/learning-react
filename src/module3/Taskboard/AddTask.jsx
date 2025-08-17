import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <div className="flex p-2">
      <input
        className="h-20 w-80 mt-10 p-5 mr-5 rounded-md border border-black"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="p-3 mt-10 text-white  text-xl rounded-md bg-blue-800"
        onClick={() => onAddTask(text)}
      >
        Add This Task
      </button>
    </div>
  );
}
