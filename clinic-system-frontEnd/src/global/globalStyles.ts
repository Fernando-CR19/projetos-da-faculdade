import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#add8e6",
  },

  button: {
    backgroundColor: "#3284f1",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
});
