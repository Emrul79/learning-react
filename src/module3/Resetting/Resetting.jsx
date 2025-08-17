import React, { useState } from "react";
import Counter from "./Counter";

export default function Resetting() {
  const [isActiveA, setIsActive] = useState(false);

  return (
    <>
      {isActiveA ? (
        <Counter key={1} person="Sarah" />
      ) : (
        <Counter key={2} person="Iqbal" />
      )}

      <button
        className="border p-2 bg-green-50"
        onClick={() => setIsActive(!isActiveA)}
      >
        Change The Person
      </button>
    </>
  );
}
