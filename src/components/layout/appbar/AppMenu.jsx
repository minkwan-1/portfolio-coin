import React from "react";
import { Box, Button, Typography } from "@mui/material";

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
        <Button key={menu?.name} sx={{ color: "action.active" }}>
          <Typography sx={{ fontWeight: "bolder" }}>{menu?.name}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default AppMenu;
