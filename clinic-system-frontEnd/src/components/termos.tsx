import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/stylesComponents/termos";
import { useRouter } from "expo-router";

export const TermosServico = ({
  onClose,
  onAccept,
}: {
  onClose: () => void;
  onAccept: () => void;
}) => {
  const router = useRouter();

  return (
    <View style={styles.background}>
      <View style={styles.caixa}>
        <Text style={styles.tittle}>Termos de Serviço</Text>
        <ScrollView style={styles.scrollTermo}>
          <Text style={styles.termoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis pulvinar vestibulum. Cras dapibus, ligula ut aliquet
            tristique, lorem massa vulputate nisi, at rutrum nulla erat vitae
            nulla. {"\n\n"}Você deve concordar com os termos para continuar o
            cadastro.
          </Text>
        </ScrollView>

        <View style={styles.areaButton}>
          <TouchableOpacity style={styles.termoButton}>
            <Text
              style={styles.termoButtonText}
              onPress={() => router.replace("/cadastro")}
            >
              Voltar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.termoButton} onPress={onAccept}>
            <Text style={styles.termoButtonText}>Aceitar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
