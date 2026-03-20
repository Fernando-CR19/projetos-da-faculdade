import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import styles from "../styles/erro";

export default function ErroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página não encontrada 😕</Text>
      <Text style={styles.subtitle}>
        A rota que você tentou acessar não existe.
      </Text>

      <Pressable style={styles.button} onPress={() => router.replace("/")}>
        <Text style={styles.buttonText}>Ir para Página Inicial</Text>
      </Pressable>
    </View>
  );
}
