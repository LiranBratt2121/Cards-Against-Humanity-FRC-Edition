import react from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  codeCopyBoxContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  codeText: {
    fontSize: 16,
    fontFamily: "monospace",
  },
  copyButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
});

export default styles;