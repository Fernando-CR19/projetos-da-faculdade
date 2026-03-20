import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/headerHome";
import TabsNavegation from "../../components/tabsNavegation";
import AgendaCard from "../../components/agendaCard";
import TabsButtonPerfil from "../../components/TabButtonsPerfil";
import styles from "../../styles/MenuStyles/agendar";

export default function AgendarScreen() {
  const [activeTab, setActiveTab] = useState<"opcao1" | "opcao2" | "opcao3">(
    "opcao1"
  );
  return (
    <View style={styles.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderHome
          titulo="Agendamentos"
          mostrarBusca={false}
          subTitulo="Veja seus agendamentos"
        />
        <ScrollView style={styles.body}>
          <TabsButtonPerfil
            tabs={[
              { label: "Consultas", value: "opcao1" },
              { label: "Exames", value: "opcao2" },
              { label: "Agendar", value: "opcao3" },
            ]}
            activeTab={activeTab}
            onPress={(value) =>
              setActiveTab(value as "opcao1" | "opcao2" | "opcao3")
            }
          />
          <AgendaCard activeTab={activeTab} />
        </ScrollView>
        <TabsNavegation />
      </SafeAreaView>
    </View>
  );
}
