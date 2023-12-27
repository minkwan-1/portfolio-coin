import * as React from "react";
import { createRoot } from "react-dom/client";

import DarkModeProvider from "./provider/DarkModeProvider";
import MuiThemeProvider from "./provider/MuiThemeProvider";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
