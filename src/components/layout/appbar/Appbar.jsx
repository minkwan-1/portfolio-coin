import React, { useState } from "react";
import { Box, Container, IconButton, Button } from "@mui/material";
import Slide from "@mui/material/Slide";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material";
import {
  Logo,
  AppMenu,
  SearchInput,
  LoginButton,
  SignupButton,
  ModeChangeButton,
  MenuIconButton,
} from "./index";
import useResponsive from "../../../hooks/common/useResponsive";
import { hamburgerMenuList } from "./menuList";

const Appbar = () => {
  const { renderBasedOnResponsive } = useResponsive();
  const theme = useTheme();

  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible((prev) => !prev);
  };

  return (
    <Box
      position="sticky"
      sx={{
        zIndex: 999,
        top: 0,
        height: "100px",
        width: "100%",
        bgcolor: "background.default",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container
        sx={{
          display: "flex",
          padding: {
            lg: "0 20px",
            xs: "0 16px",
          },
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: "20px",
          height: "100%",
        }}
      >
        {renderBasedOnResponsive(
          () => (
            <>
              <Logo />
              <Box sx={{ display: "flex", columnGap: "10px" }}>
                <ModeChangeButton />
                <MenuIconButton toggleBoxVisibility={toggleBoxVisibility} />
              </Box>
            </>
          ),
          () => (
            <>
              <Logo />
              <AppMenu />
              <ModeChangeButton />
              <SearchInput />
              <LoginButton />
              <SignupButton />
            </>
          )
        )}
      </Container>

      {isBoxVisible && (
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "#f0f2f6",
          }}
          onClick={toggleBoxVisibility}
        >
          <SearchInput sx={{ marginBottom: "10px" }} />
          {hamburgerMenuList?.map((elem, index) => (
            <Slide
              direction="right"
              timeout={{ enter: 500, exit: 500 }}
              in={isBoxVisible}
              mountOnEnter
              unmountOnExit
              key={index}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "80px",
                  borderBottom: "1px solid #ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: {
                    lg: "0 20px",
                    xs: "0 16px",
                  },
                }}
              >
                <Box>{elem?.name}</Box>
                <Box>
                  <IconButton>
                    <ArrowDropDownIcon />
                  </IconButton>
                </Box>
              </Box>
            </Slide>
          ))}
          <Button sx={{ backgroundColor: "#3861fb", width: "100%" }}>
            <Box>Create an account</Box>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Appbar;
