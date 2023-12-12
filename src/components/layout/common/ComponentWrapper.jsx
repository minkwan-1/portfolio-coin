import React from "react";
import { Box } from "@mui/material";

const ComponentWrapper = ({ style, children }) => {
  return (
    <Box
      style={style}
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        height: "auto",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default ComponentWrapper;
