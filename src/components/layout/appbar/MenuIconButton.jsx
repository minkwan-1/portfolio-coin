import React from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuIconButton = () => {
  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2, border: "1px solid white" }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default MenuIconButton;
