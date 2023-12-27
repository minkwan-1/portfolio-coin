import React, { useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./getDesignTokens";
import { useDarkContext } from "./DarkModeProvider";

const MuiThemeProvider = ({ children }) => {
  const context = useDarkContext();
  const theme = useMemo(
    () => createTheme(getDesignTokens(context.mode)),
    [context.mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
