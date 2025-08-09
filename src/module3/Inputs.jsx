import React, { useState } from "react";

export default function Inputs() {
  const [inputs, setInput] = useState([{ id: 1, label: "Input Field" }]);
  const handleClickBtn = () => {
    let nextID = inputs[inputs.length - 1].id + 1;

    setInput([
      ...inputs,
      {
        id: nextID,
        label: "Another Input",
      },
    ]);
  };
  return (
    <div className="w-{100%} h-screen bg-blue-200 flex items-center justify-center ">
      <div className="w-10/12 p-20 bg-blue-500 rounded-sm">
        {inputs.map((input) => {
          return (
            <div key={input.id} className="p-20 rounded-xl border ">
              <input
                type="text"
                className="px-10 py-5 rounded-md"
                label={input.label}
              />
            </div>
          );
        })}
        <button
          className="px-10 py-5 mt-10 text-white font-bold  text-xl rounded-md bg-blue-800"
          onClick={handleClickBtn}
        >
          Add Input
        </button>
      </div>
    </div>
  );
}
