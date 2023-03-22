import { StyleSheet, View } from "react-native";
import MyButton from "../components/MyButton";
import GetColors from "../theme/GetColors";

const Report = () => {
  const colors = GetColors();
  return (
    <View style={[styles.container, { backgroundColor: colors.container }]}>
      <View style={styles.buttonContainer}>
        <View style={[styles.innerContainer, { flexDirection: "row" }]}>
          <MyButton
            textStyle={{ color: colors.buttonText, fontSize: 18 }}
            style={[
              styles.inputContainer,
              { backgroundColor: colors.input, width: "42%" },
            ]}
          >
            Voice
          </MyButton>
          <MyButton
            textStyle={{ color: colors.buttonText, fontSize: 18 }}
            style={[
              styles.inputContainer,
              { backgroundColor: colors.input, width: "42%" },
            ]}
          >
            Text
          </MyButton>
        </View>
        <View style={[styles.innerContainer, { margin: 32 }]}>
          <MyButton
            textStyle={{ color: colors.buttonText, fontSize: 18 }}
            style={[
              styles.inputContainer,
              { backgroundColor: colors.input, width: "100%" },
            ]}
          >
            Media
          </MyButton>
        </View>
      </View>
      <MyButton style={{ width: "95%" }}>Submit</MyButton>
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
  inputContainer: {
    height: 60,
    height: 175,
  },
  input: {
    height: 60,
    borderRadius: 8,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
