import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import GetColors from "./../theme/GetColors";

const UserIcon = ({ size }) => {
  const colors = GetColors();
  return (
    <>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>
          <Icon name="user" size={size} color={colors.button} />
        </Text>
      </View>
    </>
  );
};

export default UserIcon;
