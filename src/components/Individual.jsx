import React from "react";

export default function Individual({ person }) {
  return (
    <div className="product">
      <p>{person.name}</p>
    </div>
  );
}
