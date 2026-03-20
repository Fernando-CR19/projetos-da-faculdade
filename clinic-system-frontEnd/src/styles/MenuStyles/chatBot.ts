import { StyleSheet } from "react-native";

export default StyleSheet.create({
  chatBox: {
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 10,
    width: "90%",
    margin: "auto",
    flex: 1,
    backgroundColor: "#3284f1",
    padding: 10,
    paddingTop: 250,
  },

  mensagem: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    alignSelf: "flex-end",
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    margin: "auto",
    width: "90%",
  },

  chatBoxButton: {
    width: 35,
    height: 35,
    borderRadius: "50%",
    marginBottom: 15,
    marginTop: 15,
  },

  chatBoxInput: {
    width: "100%",
    marginRight: 10,
    outlineWidth: 0,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },
});
