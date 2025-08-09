import React, { useState } from "react";

export default function Pointer() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "grey",
      }}
      onPointerMove={handlePointerMove}
    >
      <div
        style={{
          position: "absolute",
          top: "-5px",
          left: "-5px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "red",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
}
