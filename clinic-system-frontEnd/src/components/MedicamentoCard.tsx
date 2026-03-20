import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/stylesComponents/MedicamentoCard";

import { FadeIn, FadeOut } from "react-native-reanimated";
import Reanimated from "react-native-reanimated";

export default function MedicamentoCard({
  tittleRemedio = "",
  vezesdia = "",
  hora1 = "",
  hora2 = "",
}) {
  const [liked, setLiked] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [notify, setNotify] = useState(true);

  return (
    <Reanimated.View
      style={styles.CardContainer}
      entering={FadeIn.duration(700)}
      exiting={FadeOut.duration(500)}
    >
      <View style={styles.headerCardMedicamentoTittle}>
        <Text style={styles.titleRemedio}>{tittleRemedio}</Text>
        <TouchableOpacity onPress={() => setNotify(!notify)}>
          <Ionicons
            name={notify ? "notifications" : "notifications-off"}
            size={24}
            color={notify ? "white" : "gray"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoCardView}>
        <Text style={styles.textCardView}>{vezesdia} vezes ao dia</Text>
      </View>

      <View style={styles.infoCardView}>
        <Text style={styles.textCardView}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={16}
            color={"white"}
            style={{ marginRight: 5 }}
          />
          {hora1}
        </Text>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "checkbox" : "checkbox-outline"}
            size={30}
            color={liked ? "green" : "white"}
            style={{ marginRight: 10, marginTop: 5 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.infoCardView}>
        <Text style={styles.textCardView}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={16}
            color={"white"}
          />{" "}
          {hora2}
        </Text>
        <TouchableOpacity onPress={() => setLiked2(!liked2)}>
          <Ionicons
            name={liked2 ? "checkbox" : "checkbox-outline"}
            size={30}
            color={liked2 ? "green" : "white"}
            style={{ marginRight: 10, marginTop: 5 }}
          />
        </TouchableOpacity>
      </View>
    </Reanimated.View>
  );
}
