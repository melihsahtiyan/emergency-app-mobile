import { useContext, useEffect, useState } from "react";
import { globalColors } from "./colors";
import { ThemeContext } from "./ThemeProvider";

const GetColors = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [colors, setColors] = useState(
    theme === "light" ? globalColors.light : globalColors.dark
  );

  useEffect(() => {
    setColors(theme === "light" ? globalColors.light : globalColors.dark);
  }, [theme]);

  return colors;
};

export default GetColors;
