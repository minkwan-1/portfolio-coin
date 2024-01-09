export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    // Typography
    text: {
      primary: mode === "dark" ? "#ffffff" : "#1E3A8A",
      secondary: mode === "dark" ? "#A0B9D1" : "#6B6B6B",
    },
    // Buttons
    action: {
      active: mode === "dark" ? "#ffffff" : "#1E3A8A",
      hover: mode === "dark" ? "#E0EAF5" : "#284B8B",
      selected: mode === "dark" ? "#D4E4F7" : "#405D9B",
    },
    // Background
    background: {
      default: mode === "dark" ? "#1E2A3A" : "#F5F7FA",
      auxiliary: mode === "dark" ? "#31415C" : "#E9EDF2",
    },
    // Divider
    divider: mode === "dark" ? "#121212" : "#D2DCE6",
  },
});
