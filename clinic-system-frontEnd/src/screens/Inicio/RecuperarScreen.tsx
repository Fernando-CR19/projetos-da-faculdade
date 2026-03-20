import React, { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import styles from "../../styles/InicioStyles/recuperar";
import { useVerifyCode } from "../../hooks/useVerifyCode";
import { verifyCode } from "../../utils/authValidations";

export default function Recuperar() {
  const { phone } = useLocalSearchParams();
  const router = useRouter();

  const { error, validateCode } = useVerifyCode();

  const [code, setCode] = useState("");
  const [touched, setTouched] = useState(false);

  const codeError = touched ? verifyCode(code) : "";
  const isFormValid = !verifyCode(code);

  const handleSubmit = async () => {
    const currentCodeError = verifyCode(code);

    if (currentCodeError) return;

    const result = await validateCode(code, phone as string);

    if (result && !result.success) {
      return;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.titulo}>Recuperar senha</Text>
      <Text
        style={styles.subtittle}
        accessible={true}
        accessibilityLabel="Foi enviado um SMS para seu telefone. Digite o código para prosseguir"
      >
        Foi enviado um código para seu Whatsapp. Digite o código para prosseguir
      </Text>
      <Text style={styles.label}>Digite o código</Text>
      <View style={styles.inputCaixa}>
        <Ionicons
          name="chatbox-ellipses-outline"
          size={30}
          color="#0D47AB"
          style={styles.sms}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCode(text.replace(/[^0-9]/g, ""))}
          value={code}
          placeholder="Digite o código de autenticação"
          placeholderTextColor="#0D47AB"
          accessible={true}
          accessibilityLabel="Digitar código de verificação"
          keyboardType="numeric"
          maxLength={6}
          onBlur={() => setTouched(true)}
        />
      </View>

      {codeError ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{codeError}</Text>
      ) : null}

      {error ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      ) : null}

      <TouchableOpacity
        style={[styles.buttonCadastrar, !isFormValid && { opacity: 0.6 }]}
        disabled={!isFormValid}
        onPress={handleSubmit}
        accessible={true}
        accessibilityLabel="Confirmar código de verificação"
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <Text
        style={styles.text}
        onPress={() => router.replace("/esqueceu")}
        accessible={true}
        accessibilityLabel="Voltar para tela de esqueceu a senha"
      >
        Voltar
      </Text>
    </ScrollView>
  );
}
