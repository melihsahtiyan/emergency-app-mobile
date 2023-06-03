import { StyleSheet, View } from "react-native";
import { ThemeContext } from "../theme/ThemeProvider";
import GetAssets from "../theme/GetColors";
import { useContext, useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import InputContainer from "../components/InputContainer";
import { getCategories } from "../services/categoryService";
import { SelectList } from "react-native-dropdown-select-list";
import { SessionContext } from "../session/SessionProvider";
import MyButton from "../components/MyButton";

const ReportDetail = () => {
  const colors = GetAssets();
  const { theme, setTheme } = useContext(ThemeContext);
  const { location, setLocation } = useContext(SessionContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const date = new Date().getTime();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useLayoutEffect(() => {
    getCategories().then((res) => {
      setCategories(
        res.map((item) => ({ key: item.id, value: item.categoryName }))
      );
    });
    // console.log("====================================");
    // console.log("Categories:", categories);
    // console.log("====================================");
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.container }]}>
      <Header style={[{ color: colors.text }]}>Report Detail</Header>
      <InputContainer
        label="Title"
        placeholder="Please identify the problem (max 5 words)"
        multiline={false}
        onChangeText={(text) => {
          setTitle(text);
        }}
        style={[{ color: colors.text }]}
      />
      <InputContainer
        label="Description"
        placeholder="Please describe the problem (max 100 words)"
        multiline={true}
        onChangeText={(text) => {
          setDescription(text);
        }}
        style={[{ color: colors.text }]}
      />
      <SelectList
        setSelected={(item) => {
          setCategory(item);
        }}
        data={categories}
        save="key"
        placeholder="Select a category"
        inputStyles={{ color: colors.text, fontSize: 20 }}
        dropdownStyles={{ backgroundColor: colors.input }}
        dropdownTextStyles={{
          color: colors.text,
          fontSize: 18,
        }}
        boxStyles={{ backgroundColor: colors.input, width: "50%" }}
        search={false}
      />
      <MyButton style={[{ color: colors.text }]}>Send Report</MyButton>
    </View>
  );
};

export default ReportDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 36,
  },
});
