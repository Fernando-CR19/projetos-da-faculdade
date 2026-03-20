import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ADD8E6",
  },
  
  titlecard: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#D0E6FF",
    textAlign: "center",
    marginBottom: 10,
  },

  descricaocard: {
    fontSize: RFValue(16),
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "left",
  },

  price: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
    textAlign: "center",
  },

  card: {
    width: "92%",
    backgroundColor: "#0D47AB",
    borderRadius: 12,
    padding: 18,
    alignSelf: "center",
    justifyContent: "space-between",
    marginBottom: 25,
    marginTop: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },

  tag: {
    color: "white",
    fontSize: RFValue(16),
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 10,
  },

  buttoncard: {
    width: "100%",
    backgroundColor: "#3284f1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 5,
  },

  buttoncardtext: {
    color: "white",
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
});
