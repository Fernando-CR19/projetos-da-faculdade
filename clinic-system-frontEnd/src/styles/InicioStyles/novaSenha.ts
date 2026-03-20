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
    position: "relative",
  },

  input: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
    outlineWidth: 0,
    paddingLeft: 5,
    paddingRight: 45,
  },

  input2: {
    paddingLeft: 30,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    outlineWidth: 0,
  },

  buttonEye: {
    position: "absolute",
    right: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
  },

  eyeOpened: {
    marginLeft: 10,
    marginRight: 10,
  },

  eyeClosed: {
    marginLeft: 10,
    marginRight: 10,
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
    textAlign: "center",
    textDecorationLine: "underline",
  },

  cadastro: {
    fontWeight: "bold",
    color: "#0D47AB",
    fontSize: 16,
  },

  id_card: {
    marginRight: 5,
  },

  lock: {
    marginRight: 5,
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
    marginBottom: 50,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0D47AB",
    marginBottom: 6,
  },

  voltaLogin: {
    alignSelf: "flex-end",
  },

  textVoltaLogin: {
    fontWeight: "bold",
    color: "#0D47AB",
    fontSize: 18,
    alignSelf: "flex-end",
  },

  buttonConcluir: {
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

  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  box: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  digit: {
    fontSize: 20,
    fontWeight: "bold",
  },

  envelope: {
    maxWidth: 25,
    maxHeight: 25,
  },

  envelope2: {
    maxWidth: 25,
    maxHeight: 25,
    position: "absolute",
    zIndex: 1,
    top: 15,
    left: 10,
  },

  envelope3: {
    maxWidth: 25,
    maxHeight: 25,
    position: "absolute",
    zIndex: 1,
    top: 85,
    left: 10,
  },

  inputCaixa2: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 55,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    paddingLeft: 40,
  },
});
