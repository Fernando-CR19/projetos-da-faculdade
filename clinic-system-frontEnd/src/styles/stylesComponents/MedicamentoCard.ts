import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  CardContainer: {
    backgroundColor: "#0D47AB",
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
    padding: 16,
    marginTop: 30,
    marginHorizontal: 20,
  },
  
  headerCardMedicamentoTittle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  titleRemedio: {
    fontSize: RFValue(26),
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },

  infoCardView: {
    paddingBottom: 6,
    marginBottom: 12,
    backgroundColor: "#083b94ff",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textCardView: {
    fontSize: RFValue(16),
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
    padding: 5,
  },
});
