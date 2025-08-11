import React, { useState } from "react";
import Panel from "./Panel";

export default function Cordinates() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2 className="mt-10 p-5 text-3xl font-bold w-1/2 text-center mb-3">
        Almaty, Kazakhstan
      </h2>
      <Panel
        title="About"
        activeIndex
        isActive={activeIndex === 0}
        onActiveHandle={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onActiveHandle={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
