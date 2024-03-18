import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import { format } from "date-fns";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    paddingVertical: 15,
    backgroundColor: "white",
  },
  ratingContainer: {
    paddingHorizontal: 10,
  },
  detailsContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    gap: 2.5,
    flexShrink: 1,
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

const ReviewItem = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.roundedText}>{props.rating}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text fontSize={"subheading"} fontWeight={"bold"}>
          {props.user.username}
        </Text>
        <Text fontSize={"subheading"}>
          {format(new Date(props.createdAt), "dd.MM.yyyy")}
        </Text>
        <Text fontSize={"subheading"}>{props.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
