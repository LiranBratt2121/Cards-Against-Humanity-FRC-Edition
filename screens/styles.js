import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  secondaryTitle: {
    fontSize: 24,
    textAlign: "center",
    color: "#888",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 35,
    marginHorizontal: 10,
  },
  buttonFont: {
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    color: '#333',
},
});

export default styles;
