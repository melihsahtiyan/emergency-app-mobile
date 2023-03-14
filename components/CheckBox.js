import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalColors } from "../theme/colors";
import { ThemeContext } from "../theme/ThemeProvider";
import Icon from "react-native-vector-icons/FontAwesome";

const Checkbox = ({ isChecked, style }) => {
  //onChecked
  const { theme, setTheme } = useContext(ThemeContext);
  const [colors, setColors] = useState(
    theme === "light" ? globalColors.light : globalColors.dark
  );

  useEffect(() => {
    setColors(theme === "light" ? globalColors.light : globalColors.dark);
  }, [theme]);

  const [checked, setChecked] = useState(isChecked);

  const onCheckPress = () => {
    const newValue = !checked;
    setChecked(newValue);
    // onChecked(newValue);
  };

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.button + "45",
            borderColor: colors.button,
          },
          style,
        ]}
      >
        <Pressable
          style={[
            styles.checkBox,
            {
              borderColor: colors.button,
              backgroundColor: colors.button,
              opacity: checked ? 1 : 0,
            },
          ]}
          onPress={onCheckPress}
        >
          {checked && (
            <Icon
              name="check"
              color={colors.container}
              size={10}
              style={{ justifyContent: "center", alignItems: "center" }}
            />
          )}
        </Pressable>
      </View>
    </>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  checkBox: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
});
