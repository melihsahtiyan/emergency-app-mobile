import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Modal, Text } from "react-native-paper";
import GetColors from "../theme/GetColors";

const DropDown = ({ selectedValue, onValueChange, data, label }) => {
  const colors = GetColors();

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.input}>
          <Text style={{ color: colors.text }}>{selectedValue === null ? label : selectedValue}</Text>
        </View>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        onDismiss={() => setModalVisible(!modalVisible)}
        contentContainerStyle={styles.modal}
        style={{ backgroundColor: colors.green }}
      >
        <View
          style={[styles.pickerContainer, { backgroundColor: colors.green }]}
        >
          <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            style={{ color: colors.text }}
          >
            {data.map((item) => {
              return (
                <Picker.Item
                  key={item.key}
                  label={item.value}
                  value={item.value}
                />
              );
            })}
          </Picker>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
