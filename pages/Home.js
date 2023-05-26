import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { Image, Platform, Pressable, StyleSheet, View,StatusBar } from "react-native";
import { Text } from "react-native-paper";
import MyButton from "../components/MyButton";
import UserIcon from "../components/UserIcon";
import GetAssets from "../theme/GetColors";
import { ThemeContext } from "../theme/ThemeProvider";
import * as Location from "expo-location";
import LightModeIcon from "./../assets/imgs/LightModeIcon.png";
import DarkModeIcon from "./../assets/imgs/DarkModeIcon.png";
import { InformationsContext } from "../store/context/informations-context";

const Home = ({ navigation }) => {
  const colors = GetAssets();
  const [permission, setPermission] = useState(false);
  const [location, setLocation] = useState();

  const informationCtx = useContext(InformationsContext);

  function changeLocationHandler(location) {
    informationCtx.setLocation(location);
  }

  useEffect(() => {
    (async () => {
      const location = await getLocation();

      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        altitude: location.coords.altitude,
      });
    })();
    console.log("====================================");
    console.log("location: ", location);
    if (location) changeLocationHandler(location);
    console.log("Operating System: ", Platform.OS);
    console.log("====================================");
  }, [location]);

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
    <>
      <StatusBar style="auto" />
      <View style={[styles.container, { backgroundColor: colors.container }]}>
        <View
          style={[
            styles.innerContainer,
            { backgroundColor: colors.input, flexDirection: "row" },
          ]}
        >
          <Text
            style={[
              styles.header,
              { color: colors.text, textAlign: "left", padding: 10 },
            ]}
          >
            Location Services:{" "}
            {location ? (
              <Text style={{ color: colors.green }}>On</Text>
            ) : (
              <Text style={{ color: colors.button }}>Off</Text>
            )}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyButton
              style={[
                styles.button,
                {
                  backgroundColor: colors.button + "00",
                  width: 100,
                  height: 40,
                },
              ]}
              textStyle={{ fontSize: 12 }}
              onPress={() => changeTheme(!theme)}
            >
              {theme === "light" ? (
                <Image source={LightModeIcon} />
              ) : (
                <Image
                  source={DarkModeIcon}
                  style={{ width: 20, height: 20 }}
                />
              )}
            </MyButton>
            <Pressable
              onPress={() => {
                navigation.navigate("Profile");
              }}
            >
              <UserIcon size={51} />
            </Pressable>
          </View>
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
            <MyButton
              style={{ borderRadius: 150, width: 300, height: 300 }}
              textStyle={{ fontSize: 80, fontWeight: "bold" }}
              onPress={() => navigation.navigate("Report")}
            >
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
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 120,
  },
  innerContainer: {
    width: "90%",
    borderRadius: 8,
    gap: 16,
    height: 60,
    justifyContent: "space-between",
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

async function getLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission to access location was denied");
    return status;
  }

  let location = await Location.getCurrentPositionAsync({});
  console.log(location);
  return location;
}
