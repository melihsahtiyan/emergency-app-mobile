import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
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
    // {
    //   text: "\n\nYazılım kariyerleriyle ilgili olarak, birçok farklı alan vardır. Yazılım geliştirme, yazılım denetimi, yazılım mühendisliği, yazılım test etme ve yazılım yönetimi gibi alanların her biri farklı yetenekleri gerektirir. Bu alanlarda kariyer yapmak isteyenlerin, kendilerini geliştirmeleri ve sürekli olarak eğitim almaları gerekir.\n\nYazılım geliştirme, yeni yazılımların ve uygulamaların tasarımı, geliştirilmesi ve dağıtılması sürecini kapsar. Yazılım geliştirme süreci, yazılım sistemlerinin tasarlanmasından, kodlamaya, test etmeye ve son olarak da kullanıcılara sunulmasına kadar uzanır. Yazılım geliştirme, bir yazılım sisteminin tamamının oluşturulması süreci değildir; aksine, bir yazılım sisteminin bir parçasının geliştirilmesi sürecidir.\n\nYazılım denetimi, yazılım sistemlerinin işleyişini ve güvenilirliğini test etmek ve denetlemek için kullanılan bir yöntemdir. Yazılım denetimi, bir yazılım sisteminin doğru çalışıp çalışmadığını, beklenen sonuçları verip vermediğini ve güvenilir olup olmadığını test etmek için kullanılır. Yazılım denetimi, sadece yazılım sistemleri için değil, aynı zamanda bilgisayar sistemleri için de kullanılabilir.\n\nYazılım mühendisliği, yazılım sistemlerinin tasarımı, geliştirilmesi, test edilmesi ve bakımı ile ilgilenen bir meslektir. Yazılım mühendisleri, yazılım sistemlerinin nasıl çalışacağını ve bunları nasıl geliştireceklerini bilirler. Ayrıca, yazılım mühendisleri, yazılım sistemlerinin kullanıcılarının beklentilerini karşılayıp karşılamadığını, kullanıcıların nasıl kullanacağını ve yazılım sistemlerinin nasıl geliştirileceğini de bilirler.\n\nYazılım test etme, yazılım sistemlerinin doğruluğunu, güvenilirliğini ve kullanılabilirliğini test etmek için kullanılan bir yöntemdir. Yazılım test etme, yazılım sistemlerinin kullanılabilirliğini, güvenilirliğini, doğruluğunu ve kararlılığını test etmek için kullanılır. Ayrıca, yazılım test etme, yazılım sistemlerinin kullanıcılarının beklentilerini karşılayıp karşılamadığını da test eder.\n\nYazılım yönetimi, yazılım sistemlerinin tasarımı, geliştirilmesi, kullanılması, bakımı ve güncellenmesi ile ilgilenen bir meslektir. Yazılım yöneticileri, yazılım sistemlerinin nasıl çalışacağını ve bunları nasıl geliştireceklerini bilirler. Ayrıca, yazılım yöneticileri, yazılım sistemlerinin kullanıcılarının beklentilerini karşılayıp karşılamadığını, kullanıcıların nasıl kullanacağını ve yazılım sistemlerinin nasıl geliştirileceğini de bilirler.",
    //   owner: "gpt",
    // },
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
    gap: 136,
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
