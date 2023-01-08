import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router/Router";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
