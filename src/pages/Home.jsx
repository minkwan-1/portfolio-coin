import React from "react";
import { Box, useTheme } from "@mui/material";

import PageContainer from "../components/layout/common/PageContainer";
import ComponentWrapper from "../components/layout/common/ComponentWrapper";
import Table from "../components/home/Table";

const Home = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <PageContainer>
        <ComponentWrapper>
          <Box sx={{ height: "auto" }}>
            {/* Card Area */}
            <Box sx={{ display: "flex", columnGap: "60px", padding: "60px 0" }}>
              <Box
                sx={{
                  backgroundColor: "#0e1821",
                  border:
                    theme.palette.mode === "dark" ? "1px solid white" : "none",
                  width: "360px",
                  height: "200px",
                  borderRadius: "15px",
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 0.7,
                  },
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                >
                  'Trending' rendering
                </p>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                >
                  스르륵 예정
                </p>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#0e1821",
                  width: "360px",
                  border:
                    theme.palette.mode === "dark" ? "1px solid white" : "none",
                  height: "200px",
                  borderRadius: "15px",
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 0.7,
                  },
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                >
                  'News' rendering
                </p>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                >
                  스르륵 예정
                </p>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#0e1821",
                  width: "360px",
                  border:
                    theme.palette.mode === "dark" ? "1px solid white" : "none",
                  height: "200px",
                  borderRadius: "15px",
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 0.7,
                  },
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                >
                  'Fear & Greed Index' rendering
                </p>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                >
                  스르륵 예정
                </p>
              </Box>
            </Box>
            {/* Table Area */}
            <Table />
          </Box>
        </ComponentWrapper>
      </PageContainer>
    </>
  );
};

export default Home;
