import React, { useEffect } from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Reanimated, {
  Easing,
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import styles from "../styles/InicioStyles/telainicial";

export default function index() {
  const router = useRouter();
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.3, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <ScrollView
      contentContainerStyle={styles.scrollbackground}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Reanimated.View
        style={styles.background}
        entering={FadeIn.duration(1000)}
      >
        <Reanimated.Image
          source={require("../assets/heart-pulse-inicio.png")}
          style={[{ width: 120, height: 120 }, animatedStyle]}
          resizeMode="contain"
        />

        <Text style={styles.titulo}>Saúde Mania</Text>

        <Text style={styles.subTitulo}>A nossa mania é a sua saúde</Text>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => router.push("/cadastro")}
        >
          <Text style={styles.textButton}>Cadastro</Text>
        </TouchableOpacity>
      </Reanimated.View>
    </ScrollView>
  );
}
