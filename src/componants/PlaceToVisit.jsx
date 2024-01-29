import { useState } from "react";
import { initialTravelPlan } from "./PlanceData.jsx";

function PlaceTree({ id, placesById ,onComplete,parentId}) {
  const place = placesById[id];
  console.log(place);
  const childIds = place.childIds;
  return (
    <li>
      {place.title} <button onClick={onComplete(parentId,id)}>Completed</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((id) => (
            <PlaceTree key={id} id={id} placesById={placesById}
            onComplete={onComplete}
            parentId={parentId}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  //   console.log(plan);
  const root = plan[0];
  const planetsIds = root.childIds;
 
    const  handleComplete(parentId,selfId)=>{
        const parent= plan[parentId]
        const nextplan= {
            ...parent,
            childIds: childIds.
        }

        setPlan({
            ...plan,
            [parentId]: nextplan
        })
    }   

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetsIds.map((placeId) => (
          <PlaceTree key={placeId} id={placeId} placesById={plan}
          onComplete={handleComplete}
          parentId={0}
          />
        ))}
      </ol>
    </>
  );
}
