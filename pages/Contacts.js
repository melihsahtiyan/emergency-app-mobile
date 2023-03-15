import { View } from "react-native";
import { Text } from "react-native-paper";
import GetColors from "../theme/GetColors";

const Contacts = () => {
  const colors = GetColors();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.container,
      }}
    >
      <Text style={{ color: colors.text }}>Contacts</Text>
    </View>
  );
};

export default Contacts;
