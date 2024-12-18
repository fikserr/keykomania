import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./store/index.js";
import { PersistGate } from 'redux-persist/integration/react';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
