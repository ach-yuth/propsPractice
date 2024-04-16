import React from "react";
import Individual from "./Individual";

export default function Group({ persons }) {
  return (
    <div>
      {persons.map((person, idx) => {
        return <Individual key={idx} person={person} />;
      })}
    </div>
  );
}
