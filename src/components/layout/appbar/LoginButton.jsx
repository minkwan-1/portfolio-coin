import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      sx={{ color: "action.active" }}
      onClick={() => {
        navigate("/login");
      }}
    >
      <Typography sx={{ fontWeight: "bolder" }}>Login</Typography>
    </Button>
  );
};

export default LoginButton;
