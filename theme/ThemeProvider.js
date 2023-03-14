import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

const ThemeContext = React.createContext(false);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(AsyncStorage.getItem("theme"));

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
