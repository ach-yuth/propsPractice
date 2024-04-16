import React, { useState } from "react";

export default function Greeting({ count }) {
  const [Greeting, setGreeting] = useState("");
  return (
    <div className="greeting">
      <p> {Greeting}</p>
      <button
        onClick={() => {
          count < 10
            ? setGreeting("Namaste from india")
            : setGreeting("you exceeded");
        }}
      >
        Indian
      </button>

      <button
        onClick={() => {
          count < 10 ? setGreeting("Bonjur from paris") : setGreeting("sorry");
        }}
      >
        French
      </button>
    </div>
  );
}
