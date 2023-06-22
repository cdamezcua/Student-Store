import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MantineProvider>
  </React.StrictMode>
);
