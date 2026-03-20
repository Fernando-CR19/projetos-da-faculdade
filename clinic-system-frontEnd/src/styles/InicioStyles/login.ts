import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  tittle: {
    color: "#0D47AB",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 80,
  },

  subtittle: {
    color: "#0D47AB",
    fontSize: 20,
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

  input: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    outlineWidth: 0,
    width: "100%",
  },

  eyeOpened: {
    marginLeft: 10,
  },

  eyeClosed: {
    marginLeft: 10,
  },

  esqueci: {
    alignSelf: "flex-end",
    justifyContent: "flex-start",
    marginBottom: 10,
    color: "#0D47AB",
    fontWeight: "bold",
    fontSize: RFValue(14),
    textDecorationLine: "underline",
  },

  button: {
    backgroundColor: "#3284f1",
    justifyContent: "center",
    width: "100%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  cadastroCaixa: {
    marginTop: 20,
    alignItems: "center",
  },

  text: {
    color: "#0D47AB",
    fontSize: 16,
  },

  cadastro: {
    fontWeight: "bold",
    color: "#0D47AB",
    fontSize: 16,
  },

  // Assets css

  id_card: {
    marginRight: 5,
  },

  lock: {
    marginRight: 5,
  },
});
