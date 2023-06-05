import { useContext } from "react";
import { Pressable, StyleSheet, View, StatusBar } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";
import MyButton from "../components/MyButton";
import GetAssets from "../theme/GetColors";
import { SessionContext } from "../session/SessionProvider";


const Report = ({navigation}) => {
  const colors = GetAssets();

  const location = useContext(SessionContext).location;

  return (
    <View style={[styles.container, { backgroundColor: colors.container }]}>
      <StatusBar style="auto" />
      <Header>Help Is On the Way</Header>
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
            onPress={() => {navigation.navigate("ReportDetail")}}
          >
            <Icon name="keyboard" size={36} color={colors.text} />
            <Text style={{ fontSize: 18, color: colors.text }}>Text</Text>
          </Pressable>
        </View>
        <View style={[styles.input, {}]}>
          <Pressable
            style={[
              styles.buttonContainer,
              {
                backgroundColor: colors.input,
                width: "98%",
              },
            ]}
          >
            <Icon name="camera" size={36} color={colors.text} />
            <Text style={{ fontSize: 18, color: colors.text }}>Media</Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.innerContainer, { width: "90%" }]}>
        <MyButton
          style={{ width: "95%", height: 64 }}
          onPress={() => {
            console.log(location);
            navigation.navigate("ChatBot");
          }}
        >
          Submit
        </MyButton>
        <MyButton
          style={{
            width: "95%",
            height: 64,
            backgroundColor: colors.container + "00",
          }}
        >
          Skip
        </MyButton>
      </View>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 84,
  },
  innerContainer: {
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    width: 60,
    height: 175,
    borderRadius: 8,
  },
});
