import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Header: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    width: "90%",
    margin: "auto",
    padding: 20,
    backgroundColor: "#1e293b",
    borderRadius: 12,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#334155",
    shadowColor: "#06b6d4",
    shadowOpacity: 1,
    shadowRadius: 4,
  },

  Icon: {
    fontSize: 25,
    top: 2,
    cursor: "pointer",
    color: "#f8fcfd",
  },

  Name: {
    marginLeft: 5,
    fontSize: 25,
    color: "#f8fcfd",
  },
});
