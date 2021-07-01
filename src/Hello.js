import React, { useRef, useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {
  const renders = useRef(0);

  //Hook uses initializer function to grab count obj from localStorage
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  //Hook into useFetch custom hook, destructuring data from component local state
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);

  //Upon each re-render of count state, save in localStorage
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    return () => {
      //Clean-up function is called when the component is going to unmount
      //ex: if component was fetching data, when unmounting, set a useRef(true) hook to false
    };
  }, [count]);

  console.log("renders: ", renders.current++);

  //Create ref to div
  const divRef = useRef();

  //Hook into useMeasure custom hook, passing in divRef and [data] dep
  const rect = useMeasure(divRef, [data]);

  return (
    <div>
      {/* Conditionally render fetched data or loading msg */}
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
};
