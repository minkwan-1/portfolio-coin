import React from "react";
import { Box, Container } from "@mui/material";

import { Logo, AppMenu, SearchInput, LoginButton, SignupButton } from "./index";

const Appbar = () => {
  return (
    <Box
      position="sticky"
      sx={{
        zIndex: 999,
        top: 0,
        backgroundColor: "#0d1521",
        height: "100px",
        width: "100%",
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
