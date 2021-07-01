import "./App.css";
import React, { useState, useRef, useLayoutEffect } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
  //Hook into useForm custom hook and pass in initial values
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  //Hook sets state to allow Hello component to show or hide
  const [showHello, setShowHello] = useState(true);

  //Create reference to an input field (email)
  const inputRef = useRef();

  // Fires synchronously after useEffect, typically to get some info from the DOM after rendering
  useLayoutEffect(() => {
    //Gets email input dimensions
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>Toggle</button>
      {/* Render Hello component if showHello == true */}
      {showHello && <Hello />}
      <input
        //Associate input with useRef hook
        ref={inputRef}
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="firstName"
        placeholder="first name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={() => inputRef.current.focus()}>focus on email!</button>
    </div>
  );
};

export default App;
