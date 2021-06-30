import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [{ count1 }, setCount1] = useState({ count1: 0 });
  const [{ count2 }, setCount2] = useState({ count2: 0 });

  return (
    <div>
      <div>count1: {count1}</div>
      <div>count2: {count2}</div>
      <button
        onClick={() =>
          setCount1((currentState) => ({
            ...currentState,
            count1: currentState.count1 + 1,
          }))
        }
      >
        Count1
      </button>
      <button
        onClick={() =>
          setCount2((currentState) => ({
            ...currentState,
            count2: currentState.count2 + 1,
          }))
        }
      >
        Count2
      </button>
    </div>
  );
};

export default App;
