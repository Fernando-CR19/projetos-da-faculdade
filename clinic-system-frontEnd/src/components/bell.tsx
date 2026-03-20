import React, { useState } from "react";
import { View, TouchableOpacity, Text, Modal, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/stylesComponents/bell";

export default function Bell() {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const toggleSideBar = () => {
    setSideBarVisible((prev) => !prev);
  };

  return (
    <>
      <TouchableOpacity style={styles.bellContainer} onPress={toggleSideBar}>
        <View style={styles.iconContainer}>
          <Ionicons name="notifications" size={24} color="white" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={sideBarVisible}
        onRequestClose={toggleSideBar}
      >
        <Pressable style={styles.modalOverlay} onPress={toggleSideBar}>
          <Pressable
            style={styles.sideBar}
            onPress={(e) => e.stopPropagation()}
          >
            <View>
              <Text style={styles.noteTitle}>Notificações</Text>
              <TouchableOpacity style={styles.noteContent}>
                <View style={styles.noteRow}>
                  <Ionicons name="ellipse" size={20} color="#3284f1" />
                  <View style={styles.noteTextContainer}>
                    <Text style={styles.NoteText}>Texto da Notificação</Text>
                    <Text style={styles.NoteDateTime}>*Horário*</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
