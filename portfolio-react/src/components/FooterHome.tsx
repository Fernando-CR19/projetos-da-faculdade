import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { useSendMessage } from "../hooks/useSendMessage";
import { maskPhone } from "../utils/validations";
import styles from "../styles/FooterStyle";

export default function Footer() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { error, handleSendMessage } = useSendMessage();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const phoneNumbersOnly = data.phone.replace(/\D/g, "");
      await handleSendMessage(phoneNumbersOnly, data.mensagem);

      Alert.alert("Sucesso", "Mensagem enviada com sucesso");

      setShowSuccessMessage(true);
      reset({ phone: "", mensagem: "" });

      setTimeout(() => setShowSuccessMessage(false), 3000);
    } catch (err) {
      Alert.alert("Erro", error || "Não foi possível enviar a mensagem");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.FormContainer}>
        <Text style={styles.FormTitle}>Entre em contato</Text>
        <Text style={styles.FormLabel}>Celular:</Text>
        <View style={styles.Form}>
          <Ionicons name="call-outline" style={styles.FormIcon} />
          <Controller
            control={control}
            name="phone"
            rules={{
              required: "Digite um celular",
              validate: (value) => {
                const numbersOnly = value.replace(/\D/g, "");
                return (
                  numbersOnly.length === 11 ||
                  "Formato inválido. Use DDD + número"
                );
              },
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder="Digite seu celular"
                placeholderTextColor={"#cbd5e1"}
                style={styles.FormInput}
                underlineColorAndroid="transparent"
                value={maskPhone(value || "")}
                onChangeText={onChange}
                keyboardType="phone-pad"
                maxLength={15}
              />
            )}
          />
        </View>
        {errors.phone?.message && (
          <Text style={styles.errorText}>
            {errors.phone!.message as string}
          </Text>
        )}

        <Text style={styles.FormLabel}>Mande uma mensagem:</Text>
        <View style={styles.Form}>
          <Controller
            control={control}
            name="mensagem"
            rules={{ required: "Digite uma mensagem" }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                textAlignVertical="top"
                placeholder="Digite sua mensagem..."
                multiline
                style={styles.FormTextArea}
                placeholderTextColor={"#64748b"}
                underlineColorAndroid="transparent"
                value={value || ""}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.mensagem?.message && (
          <Text style={styles.errorText}>
            {errors.mensagem.message as string}
          </Text>
        )}

        {showSuccessMessage && (
          <Text style={styles.successText}>Mensagem enviada com sucesso!</Text>
        )}

        <TouchableOpacity
          style={styles.FormButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.FormButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
