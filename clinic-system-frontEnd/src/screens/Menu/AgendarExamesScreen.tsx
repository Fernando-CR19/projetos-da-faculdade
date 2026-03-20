import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { Concluido } from "../../components/concluido";
import { useExams } from "../../hooks/useExams";
import TabsNavegation from "../../components/tabsNavegation";
import HeaderHome from "../../components/headerHome";
import styles from "../../styles/MenuStyles/exames";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Buffer } from "buffer";

export default function Exames() {
  const { error, exams } = useExams();
  const [modalVisible, setModalVisible] = useState(false);

  const [userId, setUserId] = useState("");
  const [exame, setExames] = useState("");
  const [unidade, setUnidade] = useState("");
  const [atendimento, setAtendimento] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");

  const formatDate = (text: string) => {
    const cleaned = text.replace(/\D/g, "");
    const limited = cleaned.substring(0, 8);

    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 4) {
      return `${limited.substring(0, 2)}/${limited.substring(2)}`;
    } else {
      return `${limited.substring(0, 2)}/${limited.substring(
        2,
        4
      )}/${limited.substring(4)}`;
    }
  };

  const formatTime = (text: string) => {
    const cleaned = text.replace(/\D/g, "");
    const limited = cleaned.substring(0, 4);

    if (limited.length <= 2) {
      return limited;
    } else {
      return `${limited.substring(0, 2)}:${limited.substring(2)}`;
    }
  };

  const fetchUserCredentials = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) throw new Error("Token não encontrado");

    const [, payload] = token.split(".");
    const decoded = JSON.parse(Buffer.from(payload, "base64").toString("utf8"));

    return {
      userId: decoded.sub,
      username: decoded.username,
    };
  };

  const isFormValid = () => {
    return (
      exame &&
      unidade &&
      atendimento &&
      data &&
      horario &&
      exame.trim() !== "" &&
      unidade.trim() !== "" &&
      atendimento.trim() !== "" &&
      data.trim() !== "" &&
      horario.trim() !== ""
    );
  };

  const send = ({ userId, username }: { userId: string; username: string }) => {
    if (isFormValid()) {
      setModalVisible(true);
      const formData = {
        userId: userId,
        username: username,
        type: "exame",
        exame: exame,
        unidade: unidade,
        atendimento: atendimento,
        data: data,
        horario: horario,
      };
      exams(formData);
    } else {
      throw new Error("Preencha todos os campos antes de agendar");
    }
  };

  return (
    <View style={styles.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderHome
          titulo="Exames"
          mostrarBusca={false}
          mostrarVoltar={true}
          subTitulo="Faça seu agendamento"
        />
        <ScrollView>
          <View style={styles.bodyView}>
            <Text style={styles.formLabel}>Escolha seu Exame:</Text>
            <View style={styles.formInput}>
              <Ionicons name="clipboard-outline" style={styles.formIcon} />
              <Picker
                selectedValue={exame}
                onValueChange={setExames}
                style={styles.formPicker}
              >
                <Picker.Item label="Selecione um serviço" value={null} />
                <Picker.Item label="Exame de sangue" value="Exame de sangue" />
                <Picker.Item label="Raio-x" value="Raio-x" />
                <Picker.Item label="Prostata" value="Prostata" />
              </Picker>
            </View>

            <Text style={styles.formLabel}>Escolha uma Unidade:</Text>
            <View style={styles.formInput}>
              <Ionicons name="business" style={styles.formIcon} />
              <Picker
                selectedValue={unidade}
                onValueChange={setUnidade}
                style={styles.formPicker}
              >
                <Picker.Item label="Selecione uma unidade" value={null} />
                <Picker.Item label="Meireles" value="Meireles" />
                <Picker.Item label="Aldeota" value="Aldeota" />
                <Picker.Item label="Mucuripe" value="Mucuripe" />
              </Picker>
            </View>

            <Text style={styles.formLabel}>Forma de Atendimento:</Text>
            <View style={styles.formInput}>
              <Ionicons name="people" style={styles.formIcon} />
              <Picker
                selectedValue={atendimento}
                onValueChange={setAtendimento}
                style={styles.formPicker}
              >
                <Picker.Item label="Selecione uma modalidade" value={null} />
                <Picker.Item label="Presencial" value="Presencial" />
                <Picker.Item label="Remoto" value="Remoto" />
              </Picker>
            </View>

            <Text style={styles.formLabel}>Data do Atendimento:</Text>
            <View style={styles.formInput}>
              <Ionicons name="calendar-number" style={styles.formIcon} />
              <TextInput
                style={styles.formData}
                placeholder="DD/MM/AAAA"
                placeholderTextColor="#0D47AB"
                value={data}
                onChangeText={(text) => setData(formatDate(text))}
                keyboardType="numeric"
                maxLength={10}
              />
            </View>

            <Text style={styles.formLabel}>Horário do Atendimento:</Text>
            <View style={styles.formInput}>
              <Ionicons name="time" style={styles.formIcon} />
              <TextInput
                style={styles.formHora}
                placeholder="00:00"
                placeholderTextColor="#0D47AB"
                value={horario}
                onChangeText={(text) => setHorario(formatTime(text))}
                keyboardType="numeric"
                maxLength={5}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.scheduleButton,
                { opacity: isFormValid() ? 1 : 0.5 },
              ]}
              disabled={!isFormValid()}
              onPress={async () => {
                if (isFormValid()) {
                  const userCredentials = await fetchUserCredentials();
                  send(userCredentials);
                }
              }}
            >
              <Text style={styles.scheduleButtonText}>Agendar</Text>
            </TouchableOpacity>

            <Modal
              visible={modalVisible}
              animationType="fade"
              transparent={true}
            >
              <Concluido
                modalTittle="Exame Agendado Com Sucesso"
                onAccept={() => {
                  setModalVisible(false);
                }}
              />
            </Modal>
          </View>
        </ScrollView>
        <TabsNavegation />
      </SafeAreaView>
    </View>
  );
}
