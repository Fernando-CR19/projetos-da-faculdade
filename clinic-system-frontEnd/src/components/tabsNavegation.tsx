import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import tabNavegation from "../styles/stylesComponents/tabNavegation";

const goBack = () => {
  router.replace("/menu");
};

const profile = () => {
  router.push("/perfil");
};

const config = () => {
  router.push("/config");
};

export default function TabsNavegation() {
  return (
    <View style={tabNavegation.tabNavegation}>
      <TouchableOpacity
        style={tabNavegation.tabButton}
        onPress={() => goBack()}
      >
        <Ionicons name="home" size={26} color="#fff" />
        <Text style={tabNavegation.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tabNavegation.tabButton}
        onPress={() => profile()}
      >
        <Ionicons name="person" size={26} color="#fff" />
        <Text style={tabNavegation.tabText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tabNavegation.tabButton}
        onPress={() => config()}
      >
        <Ionicons name="settings" size={26} color="#fff" />
        <Text style={tabNavegation.tabText}>Config</Text>
      </TouchableOpacity>
    </View>
  );
}
