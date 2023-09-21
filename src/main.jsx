import React from "react";
import ReactDOM from "react-dom/client";
import Sunny from "./sunny.jsx";
import Cloudy from "./cloudy.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sunny />
    <Cloudy />
  </React.StrictMode>
);
