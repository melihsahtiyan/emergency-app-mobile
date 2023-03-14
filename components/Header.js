import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { globalColors } from "../theme/colors";
import { ThemeContext } from "../theme/ThemeProvider";

const Header = ({ children, style }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [colors, setColors] = useState(
    theme === "light" ? globalColors.light : globalColors.dark
  );

  useEffect(() => {
    setColors(theme === "light" ? globalColors.light : globalColors.dark);
  }, [theme]);

  return (
    <Text
      style={[
        styles.header,
        { color: colors.button, textAlign: "center" },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
