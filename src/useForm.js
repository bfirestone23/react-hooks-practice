import { useState } from "react";

//Create custom useForm hook
export const useForm = (initialValues) => {
  //Hold + set local state
  const [values, setValues] = useState(initialValues);

  //Return values and handleChange callback
  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
