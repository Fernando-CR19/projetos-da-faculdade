import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/MenuStyles/menu";
import { BounceInUp, FadeOut } from "react-native-reanimated";
import Reanimated from "react-native-reanimated";

type CardTypes = {
  title: string;
  descricao: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export default function MenuCard({
  icon,
  title,
  descricao,
  onPress,
}: CardTypes) {
  return (
    <Reanimated.View
      style={styles.buttonCards}
      entering={BounceInUp.duration(400)}
      exiting={FadeOut.duration(500)}
    >
      <TouchableOpacity style={styles.cardButton} onPress={onPress}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={40} color={"white"} />
        </View>
        <Text style={styles.textCards}>{title}</Text>
        <Text style={styles.descricaoCards}>{descricao}</Text>
      </TouchableOpacity>
    </Reanimated.View>
  );
}
