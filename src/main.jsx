import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Loader from "./ui/Loader.jsx";
import { Provider } from "react-redux";
import store from "./Store";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </Suspense>
);
