import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { ThemeContext } from "../theme/ThemeProvider";
import { globalColors } from "./../theme/colors";

const InputContainer = ({
  label,
  placeholder,
  style,
  isHidden,
  keyboardType,
  onChangeText,
  multiline,
  numberOfLines,
}) => {
  const { theme } = useContext(ThemeContext);
  const [colors, setColors] = useState(
    theme === "light" ? globalColors.light : globalColors.dark
  );

  useEffect(() => {
    setColors(theme === "light" ? globalColors.light : globalColors.dark);
  }, [theme]);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          label={label}
          placeholder={placeholder}
          style={[
            styles.input,
            {
              backgroundColor: colors.input,
              color: colors.text + "40",
            },
            style,
          ]}
          textColor={colors.text + "a0"}
          mode="outlined"
          outlineStyle={{ borderColor: colors.input }}
          placeholderTextColor={colors.text + "7a"}
          theme={{
            colors: {
              primary: colors.text + "7a",
            },
          }}
          secureTextEntry={isHidden}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
    </>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 60,
    borderRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  input: {
    height: 60,
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowRadius: 120,
  },
});
