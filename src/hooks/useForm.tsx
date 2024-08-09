import { useState } from "react";

export const useForm = <T extends { [key: string]: any }>(initState: T) => {
  const [state, setState] = useState(initState);
  const setForm = <K extends keyof T>(value: T[K], field: K) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  const setStateForm = (value: T) => {
    setState((prevState: T) => ({
      ...prevState,
      ...value
    }));
  };


  return {
    ...state,
    setStateForm,
    form: state,
    setForm,
    setState
  };
};