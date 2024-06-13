import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Style from "./Style.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode className={Style["container"]}>
    <App />
  </React.StrictMode>
);
