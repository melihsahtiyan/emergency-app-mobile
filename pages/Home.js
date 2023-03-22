import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import MyButton from "../components/MyButton";
import GetColors from "../theme/GetColors";
import { ThemeContext } from "../theme/ThemeProvider";

const Home = ({ navigation }) => {
  const colors = GetColors();
  const [location, setLocation] = useState(false);

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
    <View style={[styles.container, { backgroundColor: colors.container }]}>
      <View
        style={[
          styles.innerContainer,
          { backgroundColor: colors.input, flexDirection: "row", gap: 32 },
        ]}
      >
        <Text
          style={[styles.header, { color: colors.text, textAlign: "left" }]}
        >
          Location Services:{" "}
          {location ? (
            <Text style={{ color: colors.green }}>On</Text>
          ) : (
            <Text style={{ color: colors.button }}>Off</Text>
          )}
        </Text>
        <MyButton
          style={[
            styles.button,
            { backgroundColor: colors.button + "00", width: 100, height: 40 },
          ]}
          textStyle={{ fontSize: 12 }}
          onPress={() => changeTheme(!theme)}
        >
          {theme === "light" ? (
            <Icon name="bahai" size={27} color={"#B8A12B"} />
          ) : (
            <Icon name="moon" size={27} color={"#A67AFF"} />
          )}
        </MyButton>
      </View>
      <View
        style={[
          styles.helpContainer,
          {
            borderRadius: 191,
            width: 382,
            height: 382,
            backgroundColor: colors.button + "80",
          },
        ]}
      >
        <View
          style={[
            styles.helpContainer,
            {
              borderRadius: 174,
              width: 348,
              height: 348,
              backgroundColor: colors.button + "95",
            },
          ]}
        >
          <MyButton style={{ borderRadius: 150, width: 300, height: 300 }}>
            Help
          </MyButton>
        </View>
      </View>
      <MyButton
        style={[styles.button, { backgroundColor: colors.input }]}
        textStyle={{ fontSize: 20, color: colors.text }}
        onPress={() => navigation.navigate("Contacts")}
      >
        Manage Contacts
      </MyButton>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 48,
  },
  innerContainer: {
    width: "90%",
    borderRadius: 8,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "90%",
    height: 60,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  helpContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 16,
  },
});
