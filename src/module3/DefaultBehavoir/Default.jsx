import { useState } from "react";
import "../style.css";
import Counter from "./Counter";

export default function Fancy() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => setIsFancy(e.target.checked)}
        />
        Add Fancy Style more
      </label>
    </div>
  );
}
