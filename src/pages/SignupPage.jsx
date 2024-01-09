import React from "react";
import PageContainer from "../components/layout/common/PageContainer";
import ComponentWrapper from "../components/layout/common/ComponentWrapper";
import { Box, Button, Typography, TextField, Divider } from "@mui/material";

const SignupPage = () => {
  return (
    <PageContainer>
      <ComponentWrapper>
        {/* main title --- 1 */}
        <Box
          sx={{
            height: "130px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "25px", fontWeight: "bolder", color: "black" }}
          >
            WELCOME TO WONCOIN
          </Typography>
        </Box>

        {/* continue with social --- 2 */}
        <Box mt={3} mb={6}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Continue with Social
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "20px",
                width: "350px",
                bgcolor: "yellow",
                color: "black",
              }}
            >
              Continue with Kakao
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "20px",
                width: "350px",
                color: "white",
                bgcolor: "#fe6b57",
              }}
            >
              Continue with Google
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "20px",
                width: "350px",
                bgcolor: "black",
                color: "white",
              }}
            >
              Continue with Apple
            </Button>
          </Box>
        </Box>
        {/* divider --- 3 */}
        <Divider
          sx={{
            width: "50%",
            opacity: 0.7,
            margin: "0 auto",
          }}
        />
        {/* continue with email --- 4 */}
        <Box mt={6} mb={6}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Continue with Email
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              sx={{ width: "350px" }}
              margin="normal"
              variant="outlined"
              label="email"
              type="email"
              required
            />
            <TextField
              sx={{ width: "350px" }}
              margin="normal"
              variant="outlined"
              label="password"
              type="password"
              required
            />
            <TextField
              sx={{ width: "350px" }}
              margin="normal"
              variant="outlined"
              label="password check"
              type="password"
              required
            />
            <Button
              sx={{ width: "350px" }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
        {/* copyright --- 5 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <Typography sx={{ color: "#2f3135" }}>
            Copyright © WONCOIN 2024. All Rights Reserved.
          </Typography>
        </Box>
      </ComponentWrapper>
    </PageContainer>
  );
};

export default SignupPage;
