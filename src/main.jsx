import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
