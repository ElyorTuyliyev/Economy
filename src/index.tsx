import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



type User = { name: string; phone: string };

const user: User = {};

const users: (string | number)[] = ["Hello", "HI", 43];
