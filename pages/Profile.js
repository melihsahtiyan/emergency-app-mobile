import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { ThemeButton } from "../components/ThemeButton";
import GetColors from "../theme/GetColors";
import { SelectList } from "react-native-dropdown-select-list";
import InputContainer from "../components/InputContainer";
import { Text } from "react-native-paper";
import MyButton from "../components/MyButton";
import Icon from "react-native-vector-icons/Feather";

const Profile = () => {
  const colors = GetColors();
  const [bloodType, setBloodType] = useState("Blood Type");
  const [gender, setGender] = useState();
  const [allergies, setAllergies] = useState([]);
  const [allergy, setAllergy] = useState("");
  const [diseases, setDiseases] = useState([]);
  const [disease, setDisease] = useState("");

  const bloodTypes = [
    { key: 1, value: "A+" },
    { key: 2, value: "A-" },
    { key: 3, value: "B+" },
    { key: 4, value: "B-" },
    { key: 5, value: "AB+" },
    { key: 6, value: "AB-" },
    { key: 7, value: "O+" },
    { key: 8, value: "O-" },
  ];

  const genders = [
    { key: 1, value: "Male" },
    { key: 2, value: "Female" },
  ];

  const addButtonHandler = (setState, state, item) => {
    setState([...state, item]);
    console.log("====================================");
    console.log("add button handler: ", state);
    console.log("====================================");
  };

  const renderScreen = () => {
    return (
      <>
        <View style={styles.container}>
          <View
            style={[styles.profilePhoto, { borderColor: colors.button }]}
          ></View>
          <View style={styles.dropdownContainer}>
            <SelectList
              setSelected={(val) => setBloodType(val)}
              data={bloodTypes}
              search={false}
              placeholder="Blood Type"
              save="value"
              inputStyles={{ color: colors.text, fontSize: 20 }}
              dropdownTextStyles={{
                color: colors.text,
                backgroundColor: colors.input,
                fontSize: 18,
              }}
              boxStyles={{ backgroundColor: colors.input }}
              dropdownItemStyles={{ backgroundColor: colors.input }}
            />
            <SelectList
              setSelected={(val) => setGender(val)}
              data={genders}
              placeholder="Gender"
              save="value"
              inputStyles={{ color: colors.text, fontSize: 20 }}
              dropdownTextStyles={{
                color: colors.text,
                backgroundColor: colors.input,
                fontSize: 18,
              }}
              boxStyles={{ backgroundColor: colors.input }}
              dropdownItemStyles={{ backgroundColor: colors.input }}
              search={false}
            />
          </View>
          <View style={[styles.innerContainer]}>
            <View
              style={{
                flexDirection: "row",
                gap: 12,
                width: "52%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <InputContainer
                label="Height"
                placeholder="Height"
                keyboardType="numeric"
                style={[styles.input, { width: "100%" }]}
              />
              <InputContainer
                label="Weight"
                placeholder="Weight"
                keyboardType="numeric"
                style={[styles.input, { width: "100%" }]}
              />
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <Header style={{ color: colors.text }}>Allergies</Header>
            <View style={styles.listInputContainer}>
              <InputContainer
                label="Allergies"
                placeholder="Allergies"
                onChangeText={(e) => setAllergy(e)}
                style={styles.input}
              />
              <MyButton
                style={{
                  backgroundColor: colors.input,
                  width: 46,
                  height: 46,
                }}
                onPress={() =>
                  addButtonHandler(setAllergies, allergies, allergy)
                }
              >
                <Icon
                  name="plus"
                  color={colors.button}
                  size={35}
                  style={{ justifyContent: "center", alignItems: "center" }}
                />
              </MyButton>
            </View>

            {allergies.map((item, index) => {
              return (
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
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
                        key={index}
                        style={{
                          backgroundColor: colors.input,
                          width: "48%",
                          height: 46,
                        }}
                        onPress={() => {
                          setAllergies(
                            allergies.filter((allergy) => allergy !== item)
                          );
                        }}
                      >
                        <Text
                          style={{
                            color: colors.text,
                            fontSize: 20,
                            marginHorizontal: 16,
                            marginVertical: 13,
                            textAlign: "center",
                          }}
                        >
                          {item}
                        </Text>
                      </MyButton>
                    </View>
                  </>
                </View>
              );
            })}
            <Header style={{ color: colors.text }}>Ongoing Diseases</Header>
            <View style={styles.listInputContainer}>
              <InputContainer
                label="Diseases"
                placeholder="Diabetes, Cancer etc."
                onChangeText={(e) => setDisease(e)}
                style={styles.input}
              />
              <MyButton
                style={{
                  backgroundColor: colors.input,
                  width: 46,
                  height: 46,
                }}
                onPress={() => addButtonHandler(setDiseases, diseases, disease)}
              >
                <Icon
                  name="plus"
                  color={colors.button}
                  size={35}
                  style={{ justifyContent: "center", alignItems: "center" }}
                />
              </MyButton>
            </View>

            {diseases.map((item, index) => {
              return (
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
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
                        key={index}
                        style={{
                          backgroundColor: colors.input,
                          width: "48%",
                          height: 46,
                        }}
                        onPress={() => {
                          setDiseases(
                            diseases.filter((disease) => disease !== item)
                          );
                        }}
                      >
                        <Text
                          style={{
                            color: colors.text,
                            fontSize: 20,
                            marginHorizontal: 16,
                            marginVertical: 13,
                            textAlign: "center",
                          }}
                        >
                          {item}
                        </Text>
                      </MyButton>
                    </View>
                  </>
                </View>
              );
            })}
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.container }]}>
      <View style={styles.header}>
        {/* <Header style={{ color: colors.text }}>Profile</Header> */}
        <ThemeButton />
        <Header style={{ color: colors.text, fontSize: 17 }}>
          Information Is Crucial In Case Of Emergency...
        </Header>
      </View>
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={true}
        ref={(ref) => {
          this.flatListRef = ref;
        }}
        horizontal={true}
        data={[1]}
        renderItem={() => renderScreen()}
        keyboardShouldPersistTaps="always"
      />
      <View style={[styles.innerContainer, { marginBottom: 36 }]}>
        <MyButton style={{ width: 223, height: 56 }}>Finish</MyButton>
        <MyButton
          style={{
            backgroundColor: colors.container,
            borderWidth: 4,
            borderRadius: 8,
            borderColor: colors.button,
            width: 117,
            height: 56,
          }}
          textStyle={{ color: colors.button }}
        >
          Cancel
        </MyButton>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 36,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
    gap: 16,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
  },
  listInputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  dropdownContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
  input: { width: 306, height: 46 },
});
