import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/");
      }}
      sx={{ color: "white", fontWeight: "bolder" }}
    >
      <Typography variant="h6" noWrap component="div">
        WonCoin
      </Typography>
    </Button>
  );
};

export default Logo;
