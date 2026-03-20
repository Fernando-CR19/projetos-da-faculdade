import { StyleSheet } from "react-native";

export default StyleSheet.create({
  tabsCaixa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#0D47AB",
    width: "90%",
    padding: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 8,
  },
  
  tabButtonPerfil: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#3284f1",
    borderRadius: 8,
  },

  tabTextPerfil: {
    color: "white",
    fontWeight: "bold",
  },

  tabButtonActive: {
    backgroundColor: "#ffffff",
  },

  tabTextActive: {
    color: "#0D47AB",
  },
});
