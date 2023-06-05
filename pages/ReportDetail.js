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
import { addPost } from "../services/reportService";
import { addGptChat } from "../services/gptChatsService";

const ReportDetail = ({ navigation }) => {
  const colors = GetAssets();
  const { userId, location, post, setPost } = useContext(SessionContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useLayoutEffect(() => {
    getCategories().then((res) => {
      setCategories(
        res.map((item) => ({ key: item.id, value: item.categoryName }))
      );
    });
  }, []);

  const onPressHandler = async () => {
    const report = {
      title: title,
      description: description,
      date: new Date().toISOString(),
      latitudeFloat: parseFloat(location.latitude),
      longitudeFloat: parseFloat(location.longitude),
      altitudeFloat: parseFloat(location.altitude),
      categoryId: category,
      userId: userId,
    };
    const response = await addPost(report);
    if (response.success) {
      alert("Report sent successfully");
      setPost({ postId: response.data, title: title });
      const chatResponse = await addGptChat({
        postId: response.data,
        userId: userId,
        responseId: "string",
        message: "string",
        sentBy: "string",
      });
      navigation.navigate("ChatBot");
    } else {
      alert(response.message);
      console.log("====================================");
      console.log(response.message);
      console.log("====================================");
    }
  };

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
        placeholder="Please describe the problem (max 100 letters)"
        multiline={true}
        onChangeText={(text) => {
          setDescription(text);
        }}
        style={[{ color: colors.text, height: 80 }]}
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
      <MyButton onPress={onPressHandler} style={[{ color: colors.text }]}>
        Send Report
      </MyButton>
    </View>
  );
};

export default ReportDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 48,
  },
});
