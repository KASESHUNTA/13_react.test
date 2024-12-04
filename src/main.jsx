import React from "react";
import { createRoot } from "react-dom/client";
import App from "./store"; // Appコンポーネントを正しくインポート
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);