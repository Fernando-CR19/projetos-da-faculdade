import { View, Text, TouchableOpacity } from "react-native";
import CheckAnimation from "../animations/checkAnimation";
import styles from "../styles/stylesComponents/termos";
type ConcluidoProps = {
  modalTittle?: string;
  onAccept: () => void;
};
export const Concluido = ({ modalTittle = "", onAccept }: ConcluidoProps) => {
  return (
    <View style={styles.background}>
      <View style={styles.caixa}>
        <View style={styles.scrollTermo}>
          <Text style={styles.termoText}>{modalTittle}</Text>
          <CheckAnimation />
        </View>
        <View style={styles.areaButton2}>
          <TouchableOpacity style={styles.termoButton2} onPress={onAccept}>
            <Text style={styles.termoButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
