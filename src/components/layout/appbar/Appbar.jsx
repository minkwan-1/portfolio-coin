import React from "react";
import { Box } from "@mui/material";

const Appbar = () => {
  return (
    <Box
      position="sticky"
      sx={{
        zIndex: 999,
        top: 0,
        height: "100px",
        width: "100%",
        bgcolor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Appbar
    </Box>
  );
};

export default Appbar;
