import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ADD8E6",
  },

  caixa: {
    backgroundColor: "#ADD8E6",
    borderRadius: 12,
    padding: 20,
    width: "100%",
    alignSelf: "center",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0D47AB",
    textAlign: "center",
    marginBottom: 30,
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
    marginBottom: 6,
  },

  input: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    outlineWidth: 0,
    width: "100%",
  },

  voltaLogin: {
    alignSelf: "flex-end",
  },

  text: {
    color: "#0D47AB",
    fontSize: 18,
  },

  textVoltaLogin: {
    fontWeight: "bold",
    color: "#0D47AB",
    fontSize: 18,
    alignSelf: "flex-end",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonCadastrar: {
    backgroundColor: "#3284f1",
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

  buttonAceitar: {
    color: "#0D47AB",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },

  // assets css
  account_circle: {
    marginRight: 5,
  },

  id_card: {
    marginRight: 5,
  },

  phone: {
    marginRight: 5,
  },

  lock: {
    marginRight: 5,
  },

  eyeOpened: {
    marginLeft: 10,
  },

  eyeClosed: {
    marginLeft: 10,
  },
});
