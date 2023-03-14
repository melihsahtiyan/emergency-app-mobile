import { useContext, useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Platform,
  ScrollView,
  FlatList,
} from "react-native";
import { Text } from "react-native-paper";
import { globalColors } from "../theme/colors";
import { ThemeContext } from "../theme/ThemeProvider";
import Checkbox from "../components/CheckBox";
import Header from "../components/Header";
import InputContainer from "../components/InputContainer";
import MyButton from "../components/MyButton";

const Register = ({ navigation }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [colors, setColors] = useState(
    theme === "light" ? globalColors.light : globalColors.dark
  );

  useEffect(() => {
    setColors(theme === "light" ? globalColors.light : globalColors.dark);
  }, [theme]);

  const renderScreen = () => {
    return (
      <>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.innerContainer}>
            <View
              style={{
                flexDirection: "row",
                gap: 12,
                width: "48%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InputContainer label="First Name" placeholder="First Name" />
              <InputContainer label="Last Name" placeholder="Last Name" />
            </View>
            <InputContainer label="E-mail" placeholder="E-mail" />
            <InputContainer
              label="Password"
              placeholder="Password"
              isHidden={true}
            />
            <InputContainer
              label="Confirm Password"
              placeholder="Confirm Password"
              isHidden={true}
            />
            <InputContainer label="Date Of Birth" placeholder="Date Of Birth" />
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.container }]}>
      <View style={[styles.header, { marginTop: 48 }]}>
        <Header style={{ marginTop: Platform.OS === "ios" ? 10 : 0 }}>
          Register
        </Header>
        <Header
          style={{ color: colors.text, textAlign: "center", fontSize: 24 }}
        >
          Save Your Life In A Few Steps
        </Header>
      </View>
      <FlatList
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flex: 1,
        }}
        data={[1]}
        renderItem={() => renderScreen()}
      />
      <View style={styles.footer}>
        <View style={[styles.checkbox]}>
          <Checkbox />
          <Text style={{ color: colors.button, fontWeight: "700" }}>
            I accept{" "}
            <Text
              style={{
                textDecorationLine: "underline",
                color: colors.button,
                fontWeight: "700",
              }}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
        <MyButton>Register</MyButton>
      </View>
      <View style={styles.checkbox}>
        <Text style={[styles.text, { color: colors.text }]}>
          Already Have An Account?{" "}
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={([styles.button], { marginLeft: 5 })}
        >
          <Text style={[styles.text, { color: colors.button }]}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 24,
  },
  header: {
    gap: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 12,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  checkbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    gap: 8,
    marginBottom: 36,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
});
