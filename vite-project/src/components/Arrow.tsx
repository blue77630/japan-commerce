import React from "react";

export default function Arrow({ direction, onClick }: { direction: "left" | "right"; onClick?: () => void }) {
  return (
    <button
      className={`carousel-arrow carousel-arrow--${direction}`}
      onClick={onClick}
      aria-label={direction === "left" ? "Précédent" : "Suivant"}
      tabIndex={0}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}