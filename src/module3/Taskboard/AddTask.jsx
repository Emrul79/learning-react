import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const handleOnAddTask = () => {
    {
      text.length > 0 && onAddTask(text);
    }
    setText("");
  };
  return (
    <div className="flex p-2">
      <input
        required
        className="h-20 w-80 mt-10 p-5 mr-5 rounded-md border border-black"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={text.length < 1}
        className="p-3 mt-10 text-white  text-xl rounded-md bg-blue-800 disabled:bg-gray-600"
        onClick={handleOnAddTask}
      >
        Add This Task
      </button>
    </div>
  );
}
