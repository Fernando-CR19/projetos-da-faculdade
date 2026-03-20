import { View, ScrollView } from "react-native";
import styles from "../../styles/MenuStyles/menu";
import { Ionicons } from "@expo/vector-icons";
import TabsNavegation from "../../components/tabsNavegation";
import HeaderHome from "../../components/headerHome";
import MenuCard from "../../components/menuCards";
import { useRouter } from "expo-router";

type Botao = {
  id: number;
  title: string;
  descricao: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export default function Menu() {
  const router = useRouter();

  const card: Botao[] = [
    {
      id: 1,
      title: "AGENDAMENTO",
      descricao: "Realize seu agendamento",
      icon: "today-outline",
    },
    {
      id: 2,
      title: "RESULTADOS",
      descricao: "Veja os Resultados Clinicos",
      icon: "document-text-outline",
    },
    {
      id: 3,
      title: "MEDICAMENTOS",
      descricao: "Qual Medicamento receitado",
      icon: "bandage-outline",
    },
    {
      id: 4,
      title: "PLANOS",
      descricao: "Atualize seu plano",
      icon: "heart-circle-outline",
    },
    {
      id: 5,
      title: "CHATBOT",
      descricao: "Entre em contato",
      icon: "chatbubbles-outline",
    },
  ];

  const handleNavigation = (title: string) => {
    switch (title) {
      case "AGENDAMENTO":
        router.push("/agendar");
        break;
      case "RESULTADOS":
        router.push("/historicoRote");
        break;
      case "MEDICAMENTOS":
        router.push("/medicamentos");
        break;
      case "PLANOS":
        router.push("/planos");
        break;
      case "CHATBOT":
        router.push("/chatBot");
        break;
    }
  };

  return (
    <View style={styles.background}>
      <HeaderHome mostrarBusca={true} />
      <ScrollView style={styles.scrollCards}>
        <View style={styles.cards}>
          {card.map((item) => (
            <MenuCard
              title={item.title}
              descricao={item.descricao}
              icon={item.icon}
              onPress={() => handleNavigation(item.title)}
            />
          ))}
        </View>
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
