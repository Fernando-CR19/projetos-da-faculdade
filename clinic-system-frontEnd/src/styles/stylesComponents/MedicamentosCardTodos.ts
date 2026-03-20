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
    marginTop: 20,
    marginHorizontal: 20,
  },

  headerCard: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  titleRemedio: {
    fontSize: RFValue(20),
    color: "white",
    fontWeight: "bold",
  },

  textBadge: {
    fontSize: RFValue(14),
    fontWeight: "bold",
    color: "white",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  textInfo: {
    marginLeft: 6,
    fontSize: RFValue(14),
    color: "white",
  },

  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },

  buttonPrimary: {
    backgroundColor: "#3284f1",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 6,
  },

  buttonSecondary: {
    backgroundColor: "#3284f1",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 6,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
