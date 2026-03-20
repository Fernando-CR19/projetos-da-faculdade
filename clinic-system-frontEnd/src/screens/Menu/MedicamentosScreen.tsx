import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import styles from "../../styles/MenuStyles/medicamentos";
import Checkbox from "../../components/checkbox";
import MedicamentoCard from "../../components/MedicamentoCard";
import MedicamentoCardTodos from "../../components/MedicamentoCardTodos";
import TabsNavegation from "../../components/tabsNavegation";
import HeaderHome from "../../components/headerHome";
import TabsButtonPerfil from "../../components/TabButtonsPerfil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFetchMedicines } from "../../hooks/useFetchMedicines";

export default function MedicamentosScreen() {
  const [activeTab, setActiveTab] = useState<"pessoal" | "saude">("pessoal");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) throw new Error("Token não encontrado");

      const [, payload] = token.split(".");
      const decoded = JSON.parse(atob(payload));
      setUserId(decoded.sub);
    };

    fetchUserId();
  }, []);

  const { data, loading, error } = useFetchMedicines(userId!);

  return (
    <View style={styles.backgroundMed}>
      <HeaderHome
        titulo="Medicamentos"
        subTitulo="Veja seus Medicamentos"
        mostrarBusca={false}
        mostrarVoltar={true}
      />

      <ScrollView style={styles.bodyMed}>
        <TabsButtonPerfil
          tabs={[
            { label: "Hoje", value: "pessoal" },
            { label: "Todos", value: "saude" },
          ]}
          activeTab={activeTab}
          onPress={(value) => setActiveTab(value as "pessoal" | "saude")}
        />

        {loading && <ActivityIndicator size="large" />}
        {error && <Text>{error}</Text>}

        {!loading &&
          data.map((medicine: any) =>
            activeTab === "pessoal" ? (
              <MedicamentoCard
                key={medicine.id}
                tittleRemedio={medicine.nome}
                vezesdia={medicine.vezesAoDia}
                hora1={medicine.horarioManha}
                hora2={medicine.horarioTarde}
              />
            ) : (
              <MedicamentoCardTodos
                key={medicine.id}
                tittleRemedio={medicine.nome}
                inicio={medicine.dataInicio}
                termino={medicine.dataTermino}
                prescrito={medicine.nomeMedico}
              />
            )
          )}
        <Checkbox />
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
