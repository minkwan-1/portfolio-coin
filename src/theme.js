// theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // 적절한 primary color로 변경하세요
    },
    secondary: {
      main: "#ff4081", // 적절한 secondary color로 변경하세요
    },
    background: {
      default: "#f5f5f5", // 적절한 배경색으로 변경하세요
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // 원하는 폰트로 변경하세요
  },
});

export default theme;
