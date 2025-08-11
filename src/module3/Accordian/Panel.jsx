import React from "react";

export default function Panel({ title, children, isActive, onActiveHandle }) {
  return (
    <section className="p-10 border border-black  h-1/2 w-1/2 flex justify-center bg-gray-400">
      <div>
        <h3 className="text-center text-3xl font-bold">{title}</h3>
        {isActive ? (
          <p className="text-xl p-5">{children}</p>
        ) : (
          <button
            className="px-3 py-1 mt-10 text-white font-bold  text-xl rounded-md bg-blue-800"
            onClick={onActiveHandle}
          >
            Show
          </button>
        )}
      </div>
    </section>
  );
}
