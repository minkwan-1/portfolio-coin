import React from "react";
import { Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const SignupButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      sx={{ color: "action.active" }}
      onClick={() => {
        navigate("/signup");
      }}
    >
      <Typography sx={{ fontWeight: "bolder" }}>Signup</Typography>
    </Button>
  );
};

export default SignupButton;
