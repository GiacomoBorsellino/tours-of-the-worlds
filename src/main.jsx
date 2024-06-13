import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Style from "./Style.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // className={Style["container"]}
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
