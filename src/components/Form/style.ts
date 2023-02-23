import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 40,
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  field: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f6f6f6",
    borderRadius: 50,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#ff0043",
    borderRadius: 50,
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});

export default styles;
