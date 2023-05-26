import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, StatusBar } from "react-native";
import { ThemeContext } from "../theme/ThemeProvider";
import { globalColors } from "./../theme/colors";
import InputContainer from "./../components/InputContainer";
import { ThemeButton } from "../components/ThemeButton";
import MyButton from "../components/MyButton";
import { login } from "../services/authService";

const Login = ({ navigation }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [colors, setColors] = useState(
    theme === "light" ? globalColors.light : globalColors.dark
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setColors(theme === "light" ? globalColors.light : globalColors.dark);
  }, [theme]);

  const onLoginPressHandler = () => {
    navigation.navigate("Home");
    console.log('====================================');
    console.log(email, password);
    console.log('====================================');
    login({ email: email, password: password});
  };

  return (
    <>
      <StatusBar style="auto" />
        <View style={[styles.container, { backgroundColor: colors.container }]}>
          <View style={[styles.innerContainer, { marginTop: 24 }]}>
            <Text
              style={[
                styles.header,
                {
                  color: colors.button,
                  marginTop: Platform.OS === "ios" ? 10 : 0,
                },
              ]}
            >
              Welcome
            </Text>
          </View>
          <View style={[styles.innerContainer, { gap: 16 }]}>
            <Text style={[styles.header, { color: colors.button }]}>Login</Text>
            <InputContainer
              label="E-mail"
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={(text) => {setEmail(text)}}
            />
            <InputContainer
              label="Password"
              placeholder="Password"
              isHidden={true}
              onChangeText={(text) => {setPassword(text)}}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <MyButton
                onPress={() => {
                  onLoginPressHandler();
                }}
              >
                Login
              </MyButton>
            </View>
          </View>
          <View style={[styles.innerContainer]}>
            <Text
              style={[styles.text, { color: colors.text, marginBottom: 32 }]}
            >
              Forgot Password?
            </Text>
            <View style={[styles.footer, { flexDirection: "row" }]}>
              <Text style={[styles.text, { color: colors.text }]}>
                Don't Have An Account?
              </Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("Register");
                }}
                style={([styles.button], { marginLeft: 5 })}
              >
                <Text style={[styles.text, { color: colors.button }]}>
                  Register
                </Text>
              </Pressable>
            </View>
          </View>
          {/* <ThemeButton /> */}
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 60,
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  innerContainer: {
    alignItems: "center",
    textAlign: "center",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
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
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
});

export default Login;
