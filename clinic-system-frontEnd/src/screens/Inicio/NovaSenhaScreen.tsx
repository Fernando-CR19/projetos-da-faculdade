import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import styles from "../../styles/InicioStyles/novaSenha";
import {
  isValidCPF,
  validatePassword,
  validateConfirmPassword,
  maskCPF,
  unmaskCPF,
} from "../../utils/userValidations";
import { useUpdateUser } from "../../hooks/useUpdateUser";

export default function Novasenha() {
  const { handleSubmit } = useForm({});
  const router = useRouter();
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordShow2, setPasswordShow2] = useState(false);

  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [touched, setTouched] = useState({
    cpf: false,
    password: false,
    confirmPassword: false,
  });

  const { error, handleUpdateUser } = useUpdateUser();

  const cpfError = touched.cpf ? isValidCPF(unmaskCPF(CPF)) : "";
  const passwordError = touched.password ? validatePassword(password) : "";
  const confirmPasswordError = touched.confirmPassword
    ? validateConfirmPassword(password, confirmPassword)
    : "";

  const handleFormSubmit = () => {
    setTouched({
      cpf: true,
      password: true,
      confirmPassword: true,
    });

    const currentCpfError = isValidCPF(unmaskCPF(CPF));
    const currentPasswordError = validatePassword(password);
    const currentConfirmPasswordError = validateConfirmPassword(
      password,
      confirmPassword
    );

    if (
      !currentCpfError &&
      !currentPasswordError &&
      !currentConfirmPasswordError
    ) {
      handleUpdateUser({ CPF: unmaskCPF(CPF), password });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.titulo}>Nova senha</Text>
      <Text style={styles.subtittle}>
        Digite seu CPF e sua nova senha para atualizar seus dados
      </Text>

      <Text style={styles.label}>CPF</Text>
      <View style={styles.inputCaixa}>
       <MaterialCommunityIcons
          name="badge-account-horizontal-outline"
          size={30}
          color="#0D47AB"
          style={styles.id_card}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCPF(maskCPF(text))}
          value={CPF}
          placeholder="Digite seu CPF"
          placeholderTextColor="#0D47AB"
          keyboardType="numeric"
          maxLength={14}
          onBlur={() => setTouched((prev) => ({ ...prev, cpf: true }))}
        />
      </View>
      {touched.cpf && cpfError ? (
        <Text style={{ color: "red", marginBottom: 20, marginTop: -10 }}>
          {cpfError}
        </Text>
      ) : null}

      <Text style={styles.label}>Nova Senha</Text>
      <View style={styles.inputCaixa}>
        <Ionicons
          name="lock-closed-outline"
          size={30}
          color="#0D47AB"
          style={styles.lock}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setPassword(text.replace(/[^A-Za-z0-9]/g, ""))
          }
          value={password}
          placeholder="Digite sua senha"
          placeholderTextColor="#0D47AB"
          secureTextEntry={!passwordShow}
          maxLength={12}
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
        />
        <TouchableOpacity
          onPress={() => setPasswordShow((prev) => !prev)}
          style={styles.buttonEye}
        >
          {passwordShow ? (
            <Ionicons
              name="eye-outline"
              size={30}
              color="#0D47AB"
              style={styles.eyeOpened}
            />
          ) : (
            <Ionicons
              name="eye-off-outline"
              size={30}
              color="#0D47AB"
              style={styles.eyeClosed}
            />
          )}
        </TouchableOpacity>
      </View>
      {touched.password && passwordError ? (
        <Text style={{ color: "red", marginBottom: 20, marginTop: -10 }}>
          {passwordError}
        </Text>
      ) : null}

      <Text style={styles.label}>Confirmar Senha</Text>
      <View style={styles.inputCaixa}>
        <Ionicons name="lock-closed-outline" size={30}  color="#0D47AB" style={styles.lock} />
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setConfirmPassword(text.replace(/[^A-Za-z0-9]/g, ""))
          }
          value={confirmPassword}
          placeholder="Digite novamente"
          placeholderTextColor="#0D47AB"
          secureTextEntry={!passwordShow2}
          maxLength={12}
          onBlur={() =>
            setTouched((prev) => ({ ...prev, confirmPassword: true }))
          }
        />
        <TouchableOpacity
          onPress={() => setPasswordShow2((prev) => !prev)}
          style={styles.buttonEye}
        >
          {passwordShow2 ? (
            <Ionicons name="eye-outline" size={30} color="#0D47AB" style={styles.eyeOpened} />
          ) : (
            <Ionicons
              name="eye-off-outline"
              size={30}
              color="#0D47AB"
              style={styles.eyeClosed}
            />
          )}
        </TouchableOpacity>
      </View>
      {touched.confirmPassword && confirmPasswordError ? (
        <Text style={{ color: "red", marginBottom: 20, marginTop: -10 }}>
          {confirmPasswordError}
        </Text>
      ) : null}

      <TouchableOpacity
        style={styles.buttonConcluir}
        onPress={handleSubmit(handleFormSubmit)}
      >
        <Text style={styles.buttonText}>Concluir</Text>
      </TouchableOpacity>

      <Text style={styles.text} onPress={() => router.replace("/login")}>
        Voltar
      </Text>

      {error ? (
        <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
      ) : null}
    </ScrollView>
  );
}
