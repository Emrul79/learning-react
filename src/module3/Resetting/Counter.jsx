import React, { useState } from "react";

export default function Counter({ person }) {
  const [mycount, setMyCount] = useState(0);
  return (
    <div className="p-10 bg-green-500">
      <h1>name:{person}</h1>
      <p>Count:{mycount}</p>

      <button
        className="border p-1 bg-green-50"
        onClick={() => setMyCount(mycount + 1)}
      >
        Increase
      </button>
    </div>
  );
}
