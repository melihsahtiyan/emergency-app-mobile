import { Image, Pressable, StyleSheet, View } from "react-native";
import GetAssets from "../theme/GetColors";
import Header from "../components/Header";
import InputContainer from "../components/InputContainer";
import { Text } from "react-native-paper";
import { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

const ChatBot = () => {
  const colors = GetAssets();

  const [chats, setChats] = useState([
    {
      text: "Hello!\nDo you need any help? If you do, explain it with details so that we can help you more effective way.",
      owner: "gpt",
    },
  ]);
  const [chat, setChat] = useState([]);

  const onSubmitChatHandler = (chat) => {
    setChats([
      ...chats,
      { text: chat, owner: "user" },
      { text: "If you need help about something please be calm", owner: "gpt" },
    ]);
  };

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
        <Header style={[{ color: colors.text }]}>Chat Bot</Header>
        <Text style={{ fontSize: 16, color: colors.text, marginTop: 8 }}>
          by OpenAi
        </Text>
      </View>
      <View style={[styles.innerContainer, {}]}>
        <View
          style={[styles.arrayContainer, { backgroundColor: colors.input }]}
        >
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
                      item.owner === "user"
                        ? require("../assets/imgs/Asset7.png")
                        : require("../assets/imgs/ChatGPT-Logo-PNG-1.png")
                    }
                    style={{
                      width: 25,
                      height: item.owner === "user" ? 30 : 25,
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
              onSubmitChatHandler(chat);
            }}
          >
            <Icon name="send" size={18} color={colors.text} />
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
    gap: 48,
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
    width: 40,
    height: 40,
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
