import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  background: {
    backgroundColor: "#ADD8E6",
    flex: 1,
  },

  bodyView: {
    marginTop: 15,
    borderColor: "white",
    width: "90%",
    alignSelf: "center",
  },

  formLabel: {
    fontSize: RFValue(16),
    fontWeight: "bold",
    color: "#0D47AB",
    marginBottom: 6,
  },

  formInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 15,
  },

  formData: {
    width: "100%",
    borderWidth: 0,
    borderColor: "white",
    color: "#0D47AB",
    outlineWidth: 0,
  },

  formHora: {
    width: "100%",
    color: "#0D47AB",
    borderWidth: 0,
    elevation: 0,
    outlineWidth: 0,
  },

  formIcon: {
    fontSize: RFValue(20),
    marginRight: 5,
    marginLeft: 5,
    color: "#0D47AB",
  },

  setDate: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    borderWidth: 0,
    backgroundColor: "#fff",
  },

  setTime: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: "#fff",
  },

  formPicker: {
    borderWidth: 0,
    backgroundColor: "transparent",
    outlineWidth: 0,
    marginRight: 10,
    width: "100%",
    color: "#0D47AB",
  },

  formTextInput: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    outlineWidth: 0,
  },

  scheduleButton: {
    backgroundColor: "#3284f1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: "center",
    width: "100%",
    height: 50,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  },

  scheduleButtonText: {
    color: "white",
    fontSize: RFValue(18),
    fontWeight: "bold",
  },

  goBack: {
    borderWidth: 2,
    borderColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: "auto",
    justifyContent: "center",
    width: "100%",
    height: 50,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  },

  goBackText: {
    color: "#0D47AB",
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
});
