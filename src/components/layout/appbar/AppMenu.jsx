import React from "react";
import { Box, Button } from "@mui/material";

import { menuList } from "./menuList";

const AppMenu = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        padding: "0 40px",
        columnGap: "25px",
      }}
    >
      {menuList?.map((menu) => (
        <Button key={menu?.name}>{menu?.name}</Button>
      ))}
    </Box>
  );
};

export default AppMenu;
