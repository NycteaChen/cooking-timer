import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "@/assets/tailwind.css";
import "@/assets/scss/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/cooking-timer">
      <App />
    </BrowserRouter>
  </StrictMode>
);
