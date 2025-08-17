import React, { useState } from "react";

export default function Chat({ contact }) {
  const [text, setText] = useState("");
  return (
    <div className="p-20 ">
      <textarea
        className="border border-black rounded-md p-5 m-10"
        placeholder={"chat to :" + contact.name}
        value={text}
        onChange={(e) => setText(e.target.value)}
        name="chatbox"
        id="12"
        cols="40"
        rows="2"
      ></textarea>
      <button
        onClick={() => setText("")}
        className="border text-white  border-black rounded-sm m-2 p-3 bg-green-900 "
      >
        send this email to {contact.email}
      </button>
    </div>
  );
}
