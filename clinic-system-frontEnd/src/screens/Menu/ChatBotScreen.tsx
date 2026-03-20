import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/headerHome";
import TabsNavegation from "../../components/tabsNavegation";
import globalStyle from "../../global/globalStyles";
import styles from "../../styles/MenuStyles/chatBot";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRef, useState, useEffect } from "react";
import bot from "../../hooks/useBot";

type ChatMessage = {
  sender: "bot" | "user";
  text: string;
};

export default function ChatBotScreen() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasUserTyped, setHasUserTyped] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const { error, handleChatBot } = bot(message);

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    const userMessage = message.trim();
    setMessage("");
    setHasUserTyped(true);

    const botResponse = await handleChatBot(userMessage);

    setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
  };

  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text: `
        Olá, Sou seu assistente de saúde. Escolha uma das opções:
        1. Consulta Médica
        2. Exames
        3. Visualizar Agendamentos
        4. Dúvidas`,
      },
    ]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages]);

  return (
    <View style={globalStyle.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderHome titulo="Saúde Mania  BOT" mostrarBusca={false} />

        <View style={{ flex: 1 }}>
          <ScrollView
            ref={scrollViewRef}
            style={{ flex: 1 }}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: messages.length === 0 ? "center" : "flex-end",
              paddingHorizontal: 16,
              paddingVertical: 10,
            }}
            showsVerticalScrollIndicator={false}
          >
            {!hasUserTyped && (
              <View style={{ alignItems: "center", marginBottom: 20 }}>
                <MaterialCommunityIcons name="robot" size={100} color="white" />
              </View>
            )}

            {messages.map((msg, index) => (
              <View
                key={index}
                style={{
                  flexDirection: msg.sender === "user" ? "row-reverse" : "row",
                  alignItems: "flex-end",
                  marginVertical: 6,
                }}
              >
                <View style={{ marginHorizontal: 6 }}>
                  {msg.sender === "user" ? (
                    <Ionicons name="person-circle" size={32} color="#0D47AB" />
                  ) : (
                    <MaterialCommunityIcons
                      name="robot"
                      size={32}
                      color="white"
                    />
                  )}
                </View>

                <View
                  style={[
                    styles.mensagem,
                    {
                      backgroundColor:
                        msg.sender === "user" ? "#3284f1" : "white",
                      borderRadius: 16,
                      padding: 10,
                      maxWidth: "75%",
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: msg.sender === "user" ? "white" : "black",
                    }}
                  >
                    {msg.text}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputBox}>
            <TextInput
              style={styles.chatBoxInput}
              placeholder="Digite aqui sua mensagem..."
              onChangeText={setMessage}
              value={message}
              multiline={false}
              returnKeyType="send"
              onSubmitEditing={handleSendMessage}
            />

            <TouchableOpacity
              onPress={handleSendMessage}
              style={[styles.chatBoxButton, globalStyle.button]}
            >
              <Ionicons
                name="arrow-forward-outline"
                style={{ color: "white", fontWeight: "bold" }}
                size={18}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TabsNavegation />
      </SafeAreaView>
    </View>
  );
}
