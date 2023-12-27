import React, { createContext, useContext, useState } from "react";

const DarkContext = createContext("dark");

export const useDarkContext = () => {
  const context = useContext(DarkContext);
  return context;
};

const DarkModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((mode) => (mode === "light" ? "dark" : "light"));
  };

  return (
    <DarkContext.Provider value={{ mode, toggleColorMode }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkModeProvider;
