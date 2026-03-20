import { StyleSheet } from "react-native";

export default StyleSheet.create({
  tabNavegation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
    borderRadius: 2,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: "#0D47AB",
    elevation: 8,
    borderTopWidth: 1,
    borderColor: "white",
  },

  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#FFF",
  },

  tabInner: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 14,
  },

  tabText: {
    color: "#FFF",
  },
});
