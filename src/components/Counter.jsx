import React from "react";

export default function counter({ count, setCount }) {
  return (
    <div className="counter">
      <p>count is {count}</p>
      <div className="buttonFromCounter">
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
