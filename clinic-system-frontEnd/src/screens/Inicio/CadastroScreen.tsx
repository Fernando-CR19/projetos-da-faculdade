import { useState } from "react";
import React from "react";
import { useRouter } from "expo-router";
import { TermosServico } from "../../components/termos";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
} from "react-native";

import styles from "../../styles/InicioStyles/cadastro";

import { useSignUp } from "../../hooks/useSignUp";
import {
  unmaskPhone,
  isValidCPF,
  maskCPF,
  validateName,
  validatePassword,
  validatePhone,
  maskPhone,
  unmaskCPF,
} from "../../utils/userValidations";
import { Ionicons } from "@expo/vector-icons";

export default function Cadastro() {
  const [modalVisible, setModalVisible] = useState(false);
  const [aceitarTermos, setAceitarTermos] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);

  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [touched, setTouched] = useState({
    name: false,
    cpf: false,
    phone: false,
    password: false,
  });

  const router = useRouter();
  const { error, handleSignUp } = useSignUp();

  const abrirTermos = () => {
    setModalVisible(true);
  };

  const passwordEyes = () => {
    setPasswordShow((prev) => !prev);
  };

  const nameError = touched.name ? validateName(name) : "";
  const cpfError = touched.cpf ? isValidCPF(CPF) : "";
  const phoneError = touched.phone ? validatePhone(phone) : "";
  const passwordError = touched.password ? validatePassword(password) : "";

  const handleSubmit = () => {
    setTouched({
      name: true,
      cpf: true,
      phone: true,
      password: true,
    });

    const currentNameError = validateName(name);
    const currentCpfError = isValidCPF(CPF);
    const currentPhoneError = validatePhone(phone);
    const currentPasswordError = validatePassword(password);

    if (
      !currentNameError &&
      !currentCpfError &&
      !currentPhoneError &&
      !currentPasswordError &&
      aceitarTermos
    ) {
      const unmaskedCPF = unmaskCPF(CPF);
      const unmaskedPhone = unmaskPhone(phone);
      handleSignUp(name.trim(), unmaskedCPF, unmaskedPhone, password);
    }
  };

  return (
    <ScrollView style={styles.background}>
      <Text style={styles.titulo}>Cadastro</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <View style={styles.inputCaixa}>
        <Ionicons
          name="person-outline"
          size={30}
          color="#0D47AB"
          style={styles.id_card}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setName(text.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, ""))
          }
          value={name}
          placeholder="Digite seu nome"
          placeholderTextColor="#0D47AB"
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
        />
      </View>
      {touched.name && nameError ? (
        <Text style={{ color: "red", marginBottom: 20, marginTop: -10 }}>
          {nameError}
        </Text>
      ) : null}

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
          keyboardType="numeric"
          placeholderTextColor="#0D47AB"
          maxLength={14}
          onBlur={() => setTouched((prev) => ({ ...prev, cpf: true }))}
        />
      </View>
      {touched.cpf && cpfError ? (
        <Text style={{ color: "red", marginBottom: 20, marginTop: -10 }}>
          {cpfError}
        </Text>
      ) : null}

      <Text style={styles.label}>Celular</Text>
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
          keyboardType="numeric"
          placeholderTextColor="#0D47AB"
          maxLength={15}
          onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
        />
      </View>
      {touched.phone && phoneError ? (
        <Text style={{ color: "red", marginBottom: 20, marginTop: -10 }}>
          {phoneError}
        </Text>
      ) : null}

      <Text style={styles.label}>Crie uma Senha</Text>
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
          secureTextEntry={!passwordShow}
          placeholderTextColor="#0D47AB"
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
        <Text style={{ color: "red", marginBottom: 20, marginTop: -10 }}>
          {passwordError}
        </Text>
      ) : null}

      <TouchableOpacity onPress={abrirTermos}>
        <Text style={styles.buttonAceitar}>Aceite os Termos</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <TermosServico
          onClose={() => setModalVisible(false)}
          onAccept={() => {
            setAceitarTermos(true);
            setModalVisible(false);
          }}
        />
      </Modal>

      {!aceitarTermos &&
      (touched.name || touched.cpf || touched.phone || touched.password) ? (
        <Text style={{ color: "red", marginBottom: 5 }}>
          É necessário aceitar os termos de serviço
        </Text>
      ) : null}

      <TouchableOpacity
        style={[styles.buttonCadastrar, !aceitarTermos && { opacity: 0.6 }]}
        disabled={!aceitarTermos}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {error ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      ) : null}

      <View style={styles.voltaLogin}>
        <Text style={styles.text}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => router.replace("/login")}>
          <Text style={styles.textVoltaLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
