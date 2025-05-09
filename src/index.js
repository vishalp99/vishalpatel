import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./App";
import "./index.css"; // Import Tailwind styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);