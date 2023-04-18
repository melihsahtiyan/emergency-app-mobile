import { Image, Pressable, StyleSheet, View } from "react-native";
import GetAssets from "../theme/GetColors";
import Header from "../components/Header";
import InputContainer from "../components/InputContainer";
import { Text } from "react-native-paper";
import { useState } from "react";
import Icon from "react-native-vector-icons/Feather";

const ChatBot = () => {
  const colors = GetAssets();

  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState([]);

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
      <View style={styles.arrayContainer}>
        {chats.map((item, index) => {
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
                    <Text style={{ color: colors.text, fontSize: 20 }}>
                      {item}
                    </Text>
                </View>
              </>
            </View>
          );
        })}
      </View>
        <View
          style={styles.input}
        >
          <InputContainer
            onChangeText={(e) => setChat(e.value)}
            label="ask anything..."
          />
          <Pressable
            style={[styles.button, { backgroundColor: colors.input }]}
            onPress={() => {
              setChats([...chats, chat]);
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
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  innerContainer: {
    justifyContent: 'center',
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  }
});
