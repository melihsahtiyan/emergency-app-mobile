import { StyleSheet, View,StatusBar } from "react-native";
import Header from "../components/Header";
import GetColors from "../theme/GetColors";
import MyButton from "../components/MyButton";
import Icon from "react-native-vector-icons/Feather";
import { Text } from "react-native-paper";
import InputContainer from "../components/InputContainer";
import { ThemeButton } from "../components/ThemeButton";
import { useState } from "react";

const Contacts = () => {
  const colors = GetColors();

  const [contact, setContact] = useState();
  const [contacts, setContacts] = useState([]);

  const addButtonHandler = (setState, state, item) => {
    setState([...state, item]);
    console.log("====================================");
    console.log("add button handler: ", state);
    console.log("====================================");
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.container + "fb",
        },
      ]}
    >
      <StatusBar style="auto" />
      <Header style={{ color: colors.text }}>Contacts</Header>
      <View
        style={[
          styles.innerContainer,
          {
            backgroundColor: colors.container,
          },
        ]}
      >
        <View style={styles.inputContainer}>
          <Icon
            name="plus"
            color={colors.button}
            size={35}
            style={{ justifyContent: "center", alignItems: "center" }}
          />
          <Text style={{ color: colors.text }}>Add new Contact</Text>
        </View>
        <View style={[styles.inputContainer]}>
          <InputContainer
            style={{ backgroundColor: colors.input }}
            label="Contact"
            placeholder="Enter contact"
            onChangeText={(e) => setContact(e)}
          />
          <MyButton
            style={{
              backgroundColor: colors.input,
              width: 46,
              height: 46,
            }}
            onPress={() => addButtonHandler(setContacts, contacts, contact)}
          >
            <Icon
              name="plus"
              color={colors.button}
              size={35}
              style={{ justifyContent: "center", alignItems: "center" }}
            />
          </MyButton>
        </View>
      </View>
      <View style={styles.arrayContainer}>
        {contacts.map((item, index) => {
          return (
            <View
              style={[
                styles.inputContainer,
                {
                  backgroundColor: colors.input,
                  height: 60,
                  gap: 8,
                },
              ]}
            >
              <>
                <View
                  style={[
                    styles.listInputContainer,
                    {
                      borderRadius: 8,
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
                >
                  <MyButton
                    onPress={() => {
                      contacts.splice(index, 1);
                      setContacts([...contacts]);
                    }}
                  >
                    <Text style={{ color: colors.text, fontSize: 20 }}>
                      {item}
                    </Text>
                  </MyButton>
                </View>
              </>
            </View>
          );
        })}
      </View>
      <ThemeButton />
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    height: 160,
    width: "90%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 8,
    width: "90%",
  },
  arrayContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
