import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate("/");
        window.scrollTo(0, 0);
      }}
    >
      <Typography
        sx={{
          color: "text.secondary",
          fontWeight: "bolder",
        }}
      >
        WONCOIN
      </Typography>
    </Button>
  );
};

export default Logo;
