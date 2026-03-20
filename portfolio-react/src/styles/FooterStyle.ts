import { StyleSheet } from "react-native";

export default StyleSheet.create({
  FormContainer: {
    width: "90%",
    margin: "auto",
    marginBottom: 20,
    backgroundColor: "#1e293b",
    padding: 25,
    borderRadius: 15,
    borderTopWidth: 4,
    borderTopColor: "#06b6d4",
    borderBottomWidth: 4,
    borderBottomColor: "#06b6d4",
  },

  FormTitle: {
    fontFamily: "sans-serif",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#06b6d4",
  },

  FormLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#f8fafc",
    marginBottom: 10,
    marginTop: 15,
  },

  Form: {
    borderWidth: 2,
    borderColor: "#334155",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  FormIcon: {
    fontSize: 22,
    marginRight: 12,
    marginLeft: 15,
    color: "#06b6d4",
  },

  FormInput: {
    fontSize: 16,
    outlineWidth: 0,
    width: "100%",
    color: "#cbd5e1",
  },

  FormTextArea: {
    width: "100%",
    height: 120,
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
    color: "#cbd5e1",
    backgroundColor: "#0f172a",
    outlineWidth: 0,
    textAlignVertical: "top",
  },

  FormButton: {
    backgroundColor: "#06b6d4",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    width: "60%",
    alignSelf: "center",
  },

  FormButtonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#f8fafc",
  },

  errorText: {
    color: "#ef4444",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
    fontWeight: "500",
  },

  successText: {
    color: "#10b981",
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
    fontWeight: "600",
    backgroundColor: "#0f172a",
    padding: 12,
    borderRadius: 8,
  },
});
