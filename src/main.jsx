import React from "react";
import ReactDOM from "react-dom/client";
import Sunny from "./sunny.jsx";
import Cloudy from "./cloudy.jsx";
import Rainy from "./rainy.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sunny />
    <Cloudy />
    <Rainy/>
  </React.StrictMode>
);
