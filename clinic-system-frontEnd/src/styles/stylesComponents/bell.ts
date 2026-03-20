import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  bellContainer: {
    position: "relative",
  },

  iconContainer: {
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: -5,
    right: -8,
    backgroundColor: "#FF3B30",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },

  badgeText: {
    color: "white",
    fontSize: RFValue(12),
    fontWeight: "bold",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  sideBar: {
    position: "absolute",
    right: 30,
    top: RFValue(60),
    width: RFValue(300),
    height: RFValue(300),
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: RFValue(10),
  },

  noteTitle: {
    fontSize: RFValue(20),
    marginBottom: RFValue(10),
    textAlign: "center",
    color: "#000",
  },

  noteContent: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: RFValue(10),
    width: RFValue(280),
    marginBottom: RFValue(8),
    overflow: "hidden",
  },

  noteRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(10),
  },

  noteTextContainer: {
    flex: 1,
    justifyContent: "center",
  },

  NoteText: {
    fontSize: RFValue(15),
    color: "#000",
  },

  NoteDateTime: {
    fontSize: RFValue(12),
    color: "#888",
    marginTop: RFValue(2),
  },
});
