import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterList from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterList />
  </StrictMode>,
);
