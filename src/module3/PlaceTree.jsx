import React from "react";

export default function PlaceTree({ id, placeById, parentId, onComplete }) {
  const places = placeById[id];
  const childbyId = places.childIds;

  return (
    <li>
      {places.title}{" "}
      {
        <button
          onClick={() => onComplete(parentId, id)}
          className="px-2 py-1 mt-10 text-white font-bold  text-xl rounded-md bg-blue-800"
        >
          Complete
        </button>
      }
      {childbyId.length > 0 && (
        <ol>
          {childbyId.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placeById={placeById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
