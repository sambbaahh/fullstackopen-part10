import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    paddingVertical: 15,
    backgroundColor: "white",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 20,
    gap: 5,
  },
  ratingContainer: {
    paddingHorizontal: 10,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: 2.5,
    flexShrink: 1,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 15,
  },
  viewText: {
    backgroundColor: "#0764d1",
    paddingVertical: 20,
    width: 175,
    textAlign: "center",
    borderRadius: 5,
  },
  deleteText: {
    backgroundColor: "#d6394c",
    paddingVertical: 20,
    width: 175,
    textAlign: "center",
    borderRadius: 5,
  },
  roundedText: {
    textAlign: "center",
    textAlignVertical: "center",
    width: 55,
    height: 55,
    fontSize: 22.5,
    borderWidth: 1.5,
    borderRadius: 55 / 2,
    borderColor: "#0764d1",
    color: "#0764d1",
  },
});

export default styles;
