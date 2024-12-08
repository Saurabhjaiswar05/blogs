import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AllContext from "./context/AllContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AllContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AllContext>
);
