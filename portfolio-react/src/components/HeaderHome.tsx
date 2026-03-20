import { SafeAreaView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/HeaderStyle";

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.Header}>
        <Ionicons name="menu-outline" style={styles.Icon} />
        <Text style={styles.Name}>Olá, eu sou Fernando!</Text>
      </View>
    </SafeAreaView>
  );
}
