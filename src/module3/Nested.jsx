import React, { useState } from "react";
import PlaceTree from "./PlaceTree";
import { initialTravelPlan } from "./Places";

export default function Nested() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };
  return (
    <>
      <div className="p-20 bg-gray-400">
        <h2>Places To Visit</h2>
        <ol>
          {planetIds.map((planetId) => (
            <PlaceTree
              className="font-bold text-3xl"
              key={planetId}
              id={planetId}
              parentId={0}
              onComplete={handleComplete}
              placeById={plan}
            />
          ))}
        </ol>
      </div>
    </>
  );
}
