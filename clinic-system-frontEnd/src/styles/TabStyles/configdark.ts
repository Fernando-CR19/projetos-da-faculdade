import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#292929",
  },

  scrollArea: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },

  caixa: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },

  caixa2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },

  texto: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },

  textoSair: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
});
