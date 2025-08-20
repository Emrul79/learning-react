import { useContext } from "react";
import { lebelContext } from "./context";

export default function Section({ children }) {
  const level = useContext(lebelContext);
  return (
    <section className="section">
      <lebelContext.Provider value={level + 1}>
        {children}
      </lebelContext.Provider>
    </section>
  );
}
