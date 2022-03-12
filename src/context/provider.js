import { AppContext } from "./context";
import { useState } from "react";
const { Provider } = AppContext;

export const AppProvider = (props) => {
  const [message, setMessage] = useState("My name is context");

  return <Provider value={[message, setMessage]}>{props.children}</Provider>;
};
