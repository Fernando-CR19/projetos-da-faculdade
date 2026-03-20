import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ADD8E6",
  },

  scrollCards: {
    marginTop: 10,
  },

  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },

  buttonCards: {
    backgroundColor: "#0D47AB",
    borderRadius: 8,
    marginBottom: 16,
    width: "47%",
    height: 128,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "white",
  },

    cardButton: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: RFValue(8),
    },

    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: RFValue(4),
    },

  textCards: {
    fontSize: RFValue(18),
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },

  descricaoCards: {
    fontSize: RFValue(16),
    color: "white",
    textAlign: "center",
  },
});
