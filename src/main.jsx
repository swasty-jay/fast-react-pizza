import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Loader from "./ui/Loader.jsx";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
);
