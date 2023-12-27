import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { footerMenuList } from "./footerMenu";
import { Logo } from "../appbar";

const Footer = () => {
  return (
    <Box
      sx={{
        color: "background.default",
        height: "100%",
        width: "100%",
        minWidth: "100%",
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
              <Typography
                sx={{
                  fontWeight: "bolder",
                  marginBottom: "10px",
                  color: "text.secondary",
                }}
              >
                Products
              </Typography>
              {footerMenuList?.footerProducts.map((elem, idx) => (
                <Box key={idx}>{elem}</Box>
              ))}
            </Box>
            {/* Support */}
            <Box>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  marginBottom: "10px",
                  color: "text.secondary",
                }}
              >
                Support
              </Typography>
              {footerMenuList?.footerSupport.map((elem, idx) => (
                <Box key={idx}>{elem}</Box>
              ))}
            </Box>
            {/* Socials */}
            <Box>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  marginBottom: "10px",
                  color: "text.secondary",
                }}
              >
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
          <Box sx={{ fontWeight: "bolder", color: "text.secondary" }}>
            © 2023 WONCOIN. All rights reserved
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
