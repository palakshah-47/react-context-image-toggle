import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { ImageContextProvider } from "./ImageContext";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ImageContextProvider>
      <App />
    </ImageContextProvider>
  </StrictMode>
);
