import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardContainer: {
    borderWidth: 2,
    borderColor: "#334155",
    borderRadius: 12,
    padding: 5,
    marginBottom: 15,
  },

  cardImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155",
  },

  cardTitle: {
    fontFamily: "sans-serif",
    fontSize: 22,
    fontWeight: "bold",
    color: "#06b6d4",
    marginTop: 10,
    marginBottom: 5,
  },

  cardDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#cbd5e1",
    textAlign: "justify",
    textAlignVertical: "center",
    marginBottom: 5,
  },
});
