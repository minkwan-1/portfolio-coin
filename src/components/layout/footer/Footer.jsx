import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { footerMenuList } from "./footerMenu";
import { Logo } from "../appbar";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        color: "white",
        height: "100%",
        width: "100%",
        minWidth: "100%",
        borderTop: theme.palette.mode === "dark" ? "1px solid white" : "none",
      }}
    >
      <Container
        sx={{
          padding: { lg: "0 20px", xs: "0 16px" },
        }}
        disableGutters
      >
        {/* section 1 */}
        <Box
          sx={{
            justifyContent: "space-between",
            display: { xs: "block", sm: "flex" },
            marginBottom: "30px",
          }}
        >
          {/* logo */}
          <Box>
            <Logo />
          </Box>
          {/* info */}
          <Box
            sx={{
              display: "flex",
              columnGap: "40px",
            }}
          >
            {/* Products */}
            <Box>
              <Typography sx={{ fontWeight: "bolder", marginBottom: "10px" }}>
                Products
              </Typography>
              {footerMenuList?.footerProducts.map((elem, idx) => (
                <Box key={idx}>{elem}</Box>
              ))}
            </Box>
            {/* Support */}
            <Box>
              <Typography sx={{ fontWeight: "bolder", marginBottom: "10px" }}>
                Support
              </Typography>
              {footerMenuList?.footerSupport.map((elem, idx) => (
                <Box key={idx}>{elem}</Box>
              ))}
            </Box>
            {/* Socials */}
            <Box>
              <Typography sx={{ fontWeight: "bolder", marginBottom: "10px" }}>
                Socials
              </Typography>
              {footerMenuList?.footerSocials.map((elem, idx) => (
                <Box key={idx}>{elem}</Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/* section 2 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* copyright */}
          <Box sx={{ fontWeight: "bolder", color: "#60667a" }}>
            © 2023 WONCOIN. All rights reserved
          </Box>
          {/* <Box sx={{ display: "flex", columnGap: "5px" }}>
            <Typography>Download on the App Store</Typography>
            <Typography>GET IT ON Google Play</Typography>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
