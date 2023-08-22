import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="main-sidebar sidebar-control toggled app-container app-theme-white fixed-header fixed-sidebar fixed-footer closed-sidebar sidebar-mobile-open">
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
