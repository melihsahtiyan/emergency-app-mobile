import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import GetColors from "./../theme/GetColors";

const UserIcon = () => {
  const colors = GetColors();
  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>
          <Icon name="user" size={150} color={colors.button} />
        </Text>
      </View>
    </>
  );
};

export default UserIcon;
