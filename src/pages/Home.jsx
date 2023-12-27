import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import PageContainer from "../components/layout/common/PageContainer";
import ComponentWrapper from "../components/layout/common/ComponentWrapper";
import Table from "../components/home/Table";
import { gireumee1, gireumee2, gireumee3 } from "../images";

const Home = () => {
  const theme = useTheme();

  const cardsData = {
    Trending: [gireumee1, gireumee2, gireumee3],
    News: [gireumee2, gireumee3, gireumee1],
    "Fear & Greed": [gireumee3, gireumee1, gireumee2],
  };

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);
    console.log(interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PageContainer>
        <ComponentWrapper>
          <Box sx={{ height: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                padding: "60px 0",
              }}
            >
              {Object.keys(cardsData).map((cardTitle) => (
                <Box
                  key={cardTitle}
                  sx={{
                    position: "relative", // 점을 위한 상대 위치 설정
                    border: `1px solid ${theme.palette.divider}`,
                    bgcolor: "background.auxiliary",
                    width: "360px",
                    height: "280px",
                    borderRadius: "15px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={cardsData[cardTitle][currentPageIndex]}
                    alt={`${cardTitle} Image`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute", // 점을 위한 절대 위치 설정
                      bottom: "10px",
                      left: "50%",
                      transform: "translateX(-50%)", // 가운데 정렬
                      display: "flex",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    {[0, 1, 2].map((_, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor:
                            currentPageIndex === index
                              ? theme.palette.primary.main
                              : theme.palette.grey[300],
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
            <Table />
          </Box>
        </ComponentWrapper>
      </PageContainer>
    </>
  );
};

export default Home;
