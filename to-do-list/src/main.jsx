import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";

import { ToastContextProvider } from "./context/ToastContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </ThemeProvider>
  </StrictMode>
);