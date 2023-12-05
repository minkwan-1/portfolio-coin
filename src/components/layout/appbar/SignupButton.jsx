import React from "react";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

const SignupButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/signup");
      }}
    >
      Signup
    </Button>
  );
};

export default SignupButton;
