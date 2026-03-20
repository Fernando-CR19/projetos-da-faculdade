import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  headerView: {
    backgroundColor: "#0D47AB",
    paddingBottom: 25,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    paddingHorizontal: 15,
    elevation: 6,
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
    position: "relative",
  },

  headerBackButton: {
    width: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  headerTitle: {
    fontSize: RFValue(28),
    fontWeight: "bold",
    color: "white",

    left: 0,
    right: 0,
    textAlign: "center",
  },

  headerRight: {
    display: "flex",
    width: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  search_bar: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 12,
    paddingLeft: 30,
    fontSize: 16,
    color: "#797979ff",
    outlineWidth: 0,
  },

  headerInfo: {
    alignItems: "center",
    marginTop: 15,
  },

  headerInfoText: {
    color: "white",
    fontSize: RFValue(15),
  },
});
