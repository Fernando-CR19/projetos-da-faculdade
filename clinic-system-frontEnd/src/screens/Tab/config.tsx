import { View, ScrollView, Switch, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "../../styles/TabStyles/config";
import HeaderHome from "../../components/headerHome";
import TabsNavegation from "../../components/tabsNavegation";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import darkstyles from "../../styles/TabStyles/configdark";
export default function Config() {
  const [FontSize, SetFontsize] = useState(false);
  const [DarkMode, SetDarkMode] = useState(false);
  const [SilenceNotific, SetSilenceNotific] = useState(false);

  const router = useRouter();

  async function handleLogout() {
    try {
      await AsyncStorage.removeItem("token");
      router.replace("/");
    } catch (error) {
      throw new Error(`Error logging out, ${error}`);
    }
  }

  return (
    <View style={DarkMode ? darkstyles.background : styles.background}>
      <HeaderHome mostrarBusca={false} titulo="Configurações"/>
      <ScrollView contentContainerStyle={DarkMode ? darkstyles.scrollArea : styles.scrollArea}>
        <View style={DarkMode ? darkstyles.caixa : styles.caixa}>
          <Text style={DarkMode ? darkstyles.texto : styles.texto}>Aumentar a Fonte</Text>
          <Switch
            value={FontSize}
            onValueChange={SetFontsize}
            thumbColor={FontSize ? "#0D47AB" : "white"}
            trackColor={{ false: "#ccc", true: "#0D47AB" }}
          />
        </View>

        <View style={DarkMode ? darkstyles.caixa : styles.caixa}>
          <Text style={DarkMode ? darkstyles.texto : styles.texto}>Modo Escuro</Text>
          <Switch
            value={DarkMode}
            onValueChange={SetDarkMode}
            thumbColor={DarkMode ? "#0D47AB" : "white"}
            trackColor={{ false: "#ccc", true: "#0D47AB" }}
          />
        </View>

        <View style={DarkMode ? darkstyles.caixa : styles.caixa}>
          <Text style={DarkMode ? darkstyles.texto : styles.texto}>Silenciar Notificação</Text>
          <Switch
            value={SilenceNotific}
            onValueChange={SetSilenceNotific}
            thumbColor={SilenceNotific ? "#0D47AB" : "white"}
            trackColor={{ false: "#ccc", true: "#0D47AB" }}
          />
        </View>

        <View style={DarkMode ? darkstyles.caixa2 : styles.caixa2}>
          <Text style={DarkMode ? darkstyles.textoSair : styles.texto}>Sair</Text>
          <TouchableOpacity onPress={() => handleLogout()}>
            <MaterialIcons name="logout" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
