import React from "react";

export default function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["soy", "portfolio", "habilidades", "contacto"].map(
        (item, index) => (
          <a
            key={item + index}
            href={`#${item}`}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC", scale: "1.6" } : {}}
          />
        )
      )}
    </div>
  );
};
