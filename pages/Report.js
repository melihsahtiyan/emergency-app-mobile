import { useContext } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import { InformationsContext } from "../store/context/informations-context";
import GetColors from "../theme/GetColors";

const Report = () => {
  const colors = GetColors();

  const location = useContext(InformationsContext).location;

  return (
    <View style={[styles.container, { backgroundColor: colors.container }]}>
      <View style={styles.innerContainer}>
        <View style={[styles.innerContainer, { flexDirection: "row" }]}>
          <Pressable
            style={[
              styles.buttonContainer,
              {
                backgroundColor: colors.input,
                width: "42%",
              },
            ]}
            onPress={() => console.log("Location: ", location)}
          >
            <Icon name="microphone" size={36} color={colors.text} />
            <Text style={{ fontSize: 18, color: colors.text }}>Voice</Text>
          </Pressable>
          <Pressable
            style={[
              styles.buttonContainer,
              {
                backgroundColor: colors.input,
                width: "42%",
              },
            ]}
          >
            <Icon name="keyboard" size={36} color={colors.text} />
            <Text style={{ fontSize: 18, color: colors.text }}>Text</Text>
          </Pressable>
        </View>
        <View style={[styles.innerContainer, { margin: 32 }]}>
          <Pressable
            style={[
              styles.buttonContainer,
              {
                backgroundColor: colors.input,
              },
            ]}
          >
            <Icon name="camera" size={36} color={colors.text} />
            <Text style={{ fontSize: 18, color: colors.text }}>Media</Text>
          </Pressable>
        </View>
      </View>
      <MyButton
        style={{ width: "95%" }}
        onPress={() => {
          console.log(location);
        }}
      >
        Submit
      </MyButton>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 48,
  },
  innerContainer: {
    gap: 16,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 60,
    borderRadius: 8,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    height: 60,
    height: 175,
    borderRadius: 8,
  },
});
