import { useEffect, useState } from "react";

export const useFetch = (url) => {
  // Set local component state
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    //Set state when initiating fetch
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        //Set state when fetch competed
        setState({ data: y, loading: false });
      });
    //useEffect will cause re-render dependent upon url and setState changes
  }, [url, setState]);

  return state;
};
