import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      //Called when the component is going to unmount
      //Set to false to prevent API fetch when component isn't mounted
      isCurrent.current = false;
    };
  }, []);

  // Set local component state
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    //Set state when initiating fetch
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => {
        if (x.ok) {
          return x.text();
        } else {
          throw new Error(x.statusText);
        }
      })
      .then((y) => {
        //Only setState if isCurrent ref equals true
        //isCurrent ref is set to false via useEffect cleanup method when unmounting
        if (isCurrent.current) {
          //Set state when fetch competed
          setState({ data: y, loading: false });
        }
      })
      .catch((err) => console.log(err));
    //useEffect will cause re-render dependent upon url and setState changes
  }, [url, setState]);

  return state;
};
