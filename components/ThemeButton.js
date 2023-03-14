import { TouchableOpacity, Text } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalColors } from "../theme/colors";

export const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      AsyncStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      AsyncStorage.setItem("theme", "light");
    }
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor:
          theme === "dark"
            ? globalColors.dark.button
            : globalColors.light.button,
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 120,
      }}
      on
      onPress={() => changeTheme()}
    >
      <Text
        style={{
          color:
            theme === "dark"
              ? globalColors.dark.buttonText
              : globalColors.light.buttonText,
        }}
      >
        Button!
      </Text>
    </TouchableOpacity>
  );
};
