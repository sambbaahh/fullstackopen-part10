import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    display: "flex",
    gap: 15,
  },

  definitionContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  definitionTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  language: {
    backgroundColor: "#0764d1",
    borderRadius: 5,
    padding: 5,
    flexGrow: 0,
    alignSelf: "flex-start",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
  },
  singleStatContainer: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  linkButton: {
    backgroundColor: "#0764d1",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
});

export default styles;
