import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import styles from "../../styles/InicioStyles/esqueceu";
import { useSendCode } from "../../hooks/useSendCode";
import {
  validatePhone,
  maskPhone,
  unmaskPhone,
} from "../../utils/userValidations";
import { Ionicons } from "@expo/vector-icons";

export default function Esqueceu() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);

  const { error, handleVerificationCode } = useSendCode();

  const phoneError = touched ? validatePhone(phone) : "";

  const isFormValid = !validatePhone(phone);

  const handleSubmit = () => {
    const currentPhoneError = validatePhone(phone);

    if (!currentPhoneError) {
      const unmaskedPhone = unmaskPhone(phone);

      handleVerificationCode(unmaskedPhone);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.titulo}>Esqueceu sua senha?</Text>
      <Text
        style={styles.subtittle}
        accessible={true}
        accessibilityLabel="Coloque seu telefone para que possamos enviar um SMS para realizar a verificação"
      >
        Coloque seu telefone para que possamos enviar um SMS para realizar a
        verificação
      </Text>

      <Text style={styles.label}>Telefone</Text>
      <View style={styles.inputCaixa}>
        <Ionicons
          name="call-outline"
          size={30}
          color="#0D47AB"
          style={styles.phone}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhone(maskPhone(text))}
          value={phone}
          placeholder="Digite seu celular"
          placeholderTextColor="#0D47AB"
          keyboardType="numeric"
          maxLength={15}
          onBlur={() => setTouched(true)}
        />
      </View>

      {phoneError ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{phoneError}</Text>
      ) : null}

      {error ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      ) : null}

      <TouchableOpacity
        style={[styles.sendPasswordButton, !isFormValid && { opacity: 0.6 }]}
        disabled={!isFormValid}
        onPress={handleSubmit}
        accessible={true}
        accessibilityLabel="Envia SMS para o telefone informado"
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/login")}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
