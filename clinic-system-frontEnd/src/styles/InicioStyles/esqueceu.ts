import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ADD8E6",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0D47AB",
    textAlign: "center",
    marginBottom: 80,
  },

  phone: {
    marginRight: 5,
  },

  subtittle: {
    color: "#003186ff",
    fontSize: RFValue(16),
    textAlign: "center",
    bottom: 40,
  },

  inputCaixa: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0D47AB",
    bottom: 6,
  },

  input: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    outlineWidth: 0,
  },

  voltaLogin: {
    alignSelf: "flex-end",
  },

  text: {
    top: 15,
    color: "#0D47AB",
    fontSize: 18,
    textAlign: "center",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },

  textVoltaLogin: {
    fontWeight: "bold",
    color: "#0D47AB",
    fontSize: 18,
    alignSelf: "flex-end",
  },

  account_circle: {
    marginRight: 5,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  sendPasswordButton: {
    backgroundColor: "#3284f1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: "auto",
    justifyContent: "center",
    width: "100%",
    height: 50,
    alignItems: "center",
    marginBottom: 30,
    marginTop: 15,
  },
});
