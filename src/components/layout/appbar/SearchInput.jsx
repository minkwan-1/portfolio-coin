import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Box, InputBase } from "@mui/material";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchInput = () => {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: (theme) => theme.shape.borderRadius,
        backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: (theme) => alpha(theme.palette.common.white, 0.25),
        },
        marginRight: (theme) => theme.spacing(2),
        marginLeft: 0,
        width: { sm: "auto", sx: "100%" },
        marginLeft: { sm: 5 },
      }}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};

export default SearchInput;
