import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles/stylesComponents/MedicamentosCardTodos";

export default function MedicamentoCardTodos({
  tittleRemedio = "",
  inicio = "",
  termino = "",
  prescrito = "",
}) {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.headerCard}>
        <Text style={styles.titleRemedio}>{tittleRemedio}</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialCommunityIcons name="calendar-start" size={18} color="white" />
        <Text style={styles.textInfo}>Início: {inicio}</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialCommunityIcons name="calendar-end" size={18} color="white" />
        <Text style={styles.textInfo}>Término: {termino}</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialCommunityIcons name="stethoscope" size={18} color="white" />
        <Text style={styles.textInfo}>Prescrito por: {prescrito}</Text>
      </View>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Ver Detalhes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Histórico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
