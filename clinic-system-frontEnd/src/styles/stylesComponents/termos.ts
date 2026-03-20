import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  caixa: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingTop: 24,
    paddingBottom: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },

  tittle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  scrollTermo: {
    marginBottom: 30,
    marginTop: 20,
    maxHeight: 300,
  },

  termoText: {
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
    color: "black",
    fontSize: 16,
    lineHeight: 24,
  },

  areaButton: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
    marginTop: 10,
  },
  areaButton2: {
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: 10,
  },

  termoButton: {
    width: "45%",
    backgroundColor: "#3284f1",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
  },
    termoButton2: {
    width: "65%",
    backgroundColor: "#3284f1",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
  },


  termoButtonText: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
});
