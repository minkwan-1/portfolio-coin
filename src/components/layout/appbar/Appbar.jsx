import React from "react";
import { Box, Container, useTheme } from "@mui/material";

import { Logo, AppMenu, SearchInput, LoginButton, SignupButton } from "./index";

const Appbar = () => {
  const theme = useTheme();
  return (
    <Box
      position="sticky"
      sx={{
        zIndex: 999,
        top: 0,
        height: "100px",
        width: "100%",
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "",
        borderBottom:
          theme.palette.mode === "dark" ? "1px solid white" : "none",
      }}
    >
      <Container
        sx={{
          display: "flex",
          padding: {
            lg: "0 20px",
            xs: "0 16px",
            alignItems: "center",
            height: "100%",
          },
        }}
      >
        <Logo />
        <AppMenu />
        <SearchInput />
        <LoginButton />
        <SignupButton />
      </Container>
    </Box>
  );
};

export default Appbar;
