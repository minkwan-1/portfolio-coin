import React from "react";
import PageContainer from "../components/layout/common/PageContainer";
import { Box, Typography } from "@mui/material";

const OverviewPage = () => {
  return (
    <PageContainer>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ bgcolor: "red", height: "100px" }}>
          <Typography sx={{ color: "black" }}>
            1. Today's Cryptocurrency Prices by WONCOIN 문구 렌더링 <br />
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "orange",
            height: "400px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "350px",
              height: "250px",
              bgcolor: "blue",
              borderRadius: "12px",
            }}
          >
            <Typography sx={{ color: "white" }}>
              1. Trending <br />
              2. Recently added <br />
              3. embla carousel library 사용 <br />
            </Typography>
          </Box>
          <Box
            sx={{
              width: "350px",
              height: "250px",
              bgcolor: "navy",
              borderRadius: "12px",
            }}
          >
            <Typography sx={{ color: "white" }}>
              1. Top Community Post
              <br />
              2. Top Community Article
              <br />
              3. Top Community Accounts
              <br />
              4. embla carousel library 사용 <br />
            </Typography>
          </Box>
          <Box
            sx={{
              width: "350px",
              height: "250px",
              bgcolor: "purple",
              borderRadius: "12px",
            }}
          >
            <Typography sx={{ color: "white" }}>
              1. Fear&Greed Index <br />
              2. embla carousel library 사용 <br />
            </Typography>
          </Box>
        </Box>
        <Box sx={{ bgcolor: "yellow", height: "100vh" }}>
          <Typography sx={{ color: "black" }}>
            코인 시황 테이블 렌더링
          </Typography>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default OverviewPage;
