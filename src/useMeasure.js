import { useState, useLayoutEffect } from "react";

export const useMeasure = (ref, deps) => {
  //Store dimensions of divRef in state
  const [rect, setRect] = useState({});

  //Upon re-render of div, setRect state obj to current dimensions of data
  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rect;
};
