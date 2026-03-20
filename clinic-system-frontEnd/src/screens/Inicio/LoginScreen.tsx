import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../../styles/InicioStyles/login";
import { useRouter } from "expo-router";
import login from "../../hooks/useLogin";
import {
  unmaskCPF,
  isValidCPF,
  validatePassword,
  maskCPF,
} from "../../utils/userValidations";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const router = useRouter();
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [touched, setTouched] = useState<{ cpf: boolean; password: boolean }>({
    cpf: false,
    password: false,
  });

  const { error, handleSignIn } = login(router);

  const passwordEyes = () => {
    setPasswordShow((prev) => !prev);
  };

  const cpfError = touched.cpf ? isValidCPF(CPF) : "";
  const passwordError = touched.password ? validatePassword(password) : "";

  const handleSubmit = () => {
    const currentCpfError = isValidCPF(CPF);
    const currentPasswordError = validatePassword(password);

    if (!currentCpfError && !currentPasswordError) {
      const unmaskedCPF = unmaskCPF(CPF);

      handleSignIn(unmaskedCPF, password);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.tittle}>Login</Text>
      <Text style={styles.subtittle}>Bem-vindo(a) ao Saúde Mania</Text>

      <View style={styles.inputCaixa}>
        <MaterialCommunityIcons
          name="badge-account-horizontal-outline"
          size={30}
          color="#0D47AB"
          style={styles.id_card}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          keyboardType="numeric"
          placeholderTextColor="#0D47AB"
          value={maskCPF(CPF)}
          onChangeText={(text) => setCPF(text)}
          maxLength={14}
          onBlur={() => setTouched((prev) => ({ ...prev, cpf: true }))}
        />
      </View>
      {touched.cpf && cpfError ? (
        <Text style={{ color: "red", marginTop: -10, marginBottom: 20 }}>
          {cpfError}
        </Text>
      ) : null}

      <View style={styles.inputCaixa}>
        <Ionicons
          name="lock-closed-outline"
          size={30}
          color="#0D47AB"
          style={styles.lock}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#0D47AB"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!passwordShow}
          maxLength={8}
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
        />
        <TouchableOpacity onPress={passwordEyes}>
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
        <Text style={{ color: "red", marginBottom: 5, marginTop: -10 }}>
          {passwordError}
        </Text>
      ) : null}

      {error ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      ) : null}

      <TouchableOpacity onPress={() => router.replace("/esqueceu")}>
        <Text style={styles.esqueci}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <View style={styles.cadastroCaixa}>
        <Text style={styles.text}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => router.replace("/cadastro")}>
          <Text style={styles.cadastro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
