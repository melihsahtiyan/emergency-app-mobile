import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import GetAssets from "../theme/GetColors";
import Header from "../components/Header";
import InputContainer from "../components/InputContainer";
import { Text } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { SessionContext } from "../session/SessionProvider";
import { addGptChat, getGptChatByPostId } from "../services/gptChatsService";

const ChatBot = ({ route }) => {
  const colors = GetAssets();
  const { post, userId } = useContext(SessionContext);

  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState([]);

  const sendChatHandler = async () => {
    const chatToAdd = {
      postId: post.postId,
      userId: userId,
      message: chat,
      sentBy: "string",
      responseId: "string",
    };
    const response = await addGptChat(chatToAdd);
    if (response.success) {
      setChat("");
    }
  };

  useEffect(() => {
    console.log("====================================");
    console.log("Post:  ", post);
    console.log("====================================");
    getGptChatByPostId(post.postId).then((res) => {
      setChats(
        res.map((item) => ({
          key: item.id,
          text: item.message,
          owner: item.sentBy,
        }))
      );
    });

    console.log("====================================");
    console.log("Chats: ", chats);
    console.log("====================================");
  }, [chat]);

  return (
    <View style={[styles.container, { backgroundColor: colors.container }]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <Image
          source={require("../assets/imgs/ResQ-logo.png")}
          style={{ width: 125, height: 50 }}
        />
        <Header style={[{ color: colors.text }]}>
          Chat Bot{" "}
          <Text style={{ fontSize: 16, color: colors.text, marginTop: 8 }}>
            by OpenAi
          </Text>
        </Header>
      </View>
      <View style={[styles.innerContainer, {}]}>
        <View
          style={[styles.arrayContainer, { backgroundColor: colors.input }]}
        >
          <ScrollView style={{ width: "100%", height: 400 }}>
            {chats.map((item, index) => {
              return (
                <View
                  style={[
                    styles.inputContainer,
                    {
                      borderTopColor: index === 0 ? null : colors.gpt,
                      borderTopWidth: index === 0 ? null : 0.8,
                      width: "100%",
                      gap: 12,
                    },
                  ]}
                >
                  <>
                    <Image
                      source={
                        item.owner === "User"
                          ? require("../assets/imgs/logo-dark.png")
                          : require("../assets/imgs/logo-red.png")
                      }
                      style={{
                        width: 25,
                        height: 30,
                      }} 
                    />
                    <Text
                      style={{ color: colors.text, fontSize: 16, width: "80%" }}
                    >
                      {item.owner === "user" ? "You: " : "Gpt: "}
                      {item.text}
                    </Text>
                  </>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.input}>
          <InputContainer
            onChangeText={(e) => setChat(e)}
            label="ask anything if you are confused..."
            style={{
              height: chat.length < 30 ? 60 : 120,
            }}
            multiline={true}
            numberOfLines={4}
          />
          <Pressable
            style={[styles.button, { backgroundColor: colors.input }]}
            onPress={() => {
              sendChatHandler();
            }}
          >
            <Icon name="send" size={24} color={colors.text} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 120,
  },
  arrayContainer: {
    width: "100%",
    borderRadius: 8,
    gap: 8,
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "85%",
    borderRadius: 8,
    gap: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  inputContainer: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "90%",
    padding: 12,
  },
});
