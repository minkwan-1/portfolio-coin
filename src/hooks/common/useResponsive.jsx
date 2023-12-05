import { useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const renderBasedOnResponsive = (
    componentsForMobile,
    componentsForDesktop
  ) => {
    return isMobile ? componentsForMobile() : componentsForDesktop();
  };

  return { isMobile, renderBasedOnResponsive };
};

export default useResponsive;
