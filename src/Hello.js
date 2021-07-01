import React, { useRef } from "react";

export const Hello = () => {
  const renders = useRef(0);

  console.log("renders: ", renders.current++);

  return <div>hello</div>;
};
