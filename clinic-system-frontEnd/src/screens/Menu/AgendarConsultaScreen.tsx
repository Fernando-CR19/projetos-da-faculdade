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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Picker } from "@react-native-picker/picker";
import { Concluido } from "../../components/concluido";
import { useConsultation } from "../../hooks/useConsultation";
import TabsNavegation from "../../components/tabsNavegation";
import HeaderHome from "../../components/headerHome";
import styles from "../../styles/MenuStyles/agendarConsulta";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Buffer } from "buffer";

const AgendarConsultaScreen = () => {
  const { error, consultation } = useConsultation();
  const [modalVisible, setModalVisible] = useState(false);

  // campos
  const [userId, setUserId] = useState("");
  const [medico, setMedico] = useState("");
  const [servico, setServico] = useState("");
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
      medico &&
      servico &&
      unidade &&
      atendimento &&
      data &&
      horario &&
      medico.trim() !== "" &&
      servico.trim() !== "" &&
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
        type: "consulta",
        medico: medico,
        servico: servico,
        unidade: unidade,
        atendimento: atendimento,
        data: data,
        horario: horario,
      };
      consultation(formData);
    } else {
      throw new Error("Preencha todos os campos antes de agendar");
    }
  };

  return (
    <View style={styles.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderHome
          titulo="Consultas"
          mostrarBusca={false}
          subTitulo="Faça seu agendamento"
          mostrarVoltar={true}
        />
        <ScrollView>
          <View style={styles.bodyView}>
            {/* Escolher Médico */}
            <Text style={styles.formLabel}>Escolha um Médico:</Text>
            <View style={styles.formInput}>
              <MaterialCommunityIcons
                name="stethoscope"
                style={styles.formIcon}
              />
              <Picker
                selectedValue={medico}
                onValueChange={setMedico}
                style={styles.formPicker}
              >
                <Picker.Item label="Selecione um Médico" value={null} />
                <Picker.Item label="Paulo Muzy" value="Paulo Muzy" />
                <Picker.Item label="Drauzio Varella" value="Drauzio Varella" />
                <Picker.Item label="Jorge Moll" value="Jorge Moll" />
              </Picker>
            </View>

            {/* Escolher Serviço */}
            <Text style={styles.formLabel}>Escolha um Serviço:</Text>
            <View style={styles.formInput}>
              <Ionicons name="clipboard-outline" style={styles.formIcon} />
              <Picker
                selectedValue={servico}
                onValueChange={setServico}
                style={styles.formPicker}
              >
                <Picker.Item label="Selecione um serviço" value={null} />
                <Picker.Item label="Cardiologista" value="Cardiologista" />
                <Picker.Item label="Pediatra" value="Pediatra" />
                <Picker.Item label="Otorrino" value="Otorrino" />
              </Picker>
            </View>

            {/* Escolher Unidade do Atendimento */}
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

            {/* Escolher Modalidade do Atendimento */}
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

            {/* Definir Dia do Atendimento */}
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

            {/* Definir Hora do Atendimento */}
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

            {/* Botão para Agendar */}
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

            {/* Modal para Confirmação do Agendamento */}
            <Modal
              visible={modalVisible}
              animationType="fade"
              transparent={true}
            >
              <Concluido
                modalTittle="Consulta Agendada Com Sucesso"
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
};

export default AgendarConsultaScreen;
