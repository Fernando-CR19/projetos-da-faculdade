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
    marginBottom: 20,

    marginHorizontal: 20,
  },

  DateHour: {
    fontSize: RFValue(16),
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },

  infoCardView: {
    borderBottomWidth: 1,
    borderBottomColor: "#dfdbdbff",
    paddingBottom: 6,
    marginBottom: 12,
  },

  labelCardView: {
    fontSize: RFValue(14),
    color: "white",
    fontWeight: "400",
    marginBottom: 5,
  },

  textCardView: {
    fontSize: RFValue(16),
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
  },

  caixaButtonOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  buttonCardEdit: {
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 12,
    marginRight: 8,
    backgroundColor: "#3284f1",
  },

  buttonCardCancel: {
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    marginLeft: 8,
    paddingVertical: 12,
  },

  buttonTextCardView: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "white",
  },

  noItem: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});
