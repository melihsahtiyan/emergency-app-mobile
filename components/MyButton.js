import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { globalColors } from "../theme/colors";
import { ThemeContext } from "../theme/ThemeProvider";

const MyButton = ({ onPress, children, style, labelStyle, textStyle }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [colors, setColors] = useState(
    theme === "light" ? globalColors.light : globalColors.dark
  );

  useEffect(() => {
    setColors(theme === "light" ? globalColors.light : globalColors.dark);
  }, [theme]);

  return (
    <>
      <Pressable
        mode="contained"
        onPress={onPress}
        style={[
          styles.button,
          {
            backgroundColor: colors.button,
          },
          style,
        ]}
        labelStyle={[styles.buttonLabel, labelStyle]}
      >
        <Text style={[styles.text, { color: colors.buttonText }, textStyle]}>
          {children}
        </Text>
      </Pressable>
    </>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    gap: 32,
    borderRadius: 8,
    height: 48,
    width: 164,
    justifyContent: "center",
  },
  buttonLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
