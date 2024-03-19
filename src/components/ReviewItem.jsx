import { View, StyleSheet, Pressable, Alert } from "react-native";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";

import Text from "./Text";
import { DELETE_REVIEW } from "../graphql/mutations";
import { GET_CURRENT_USER } from "../graphql/queries";

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

const ReviewItem = ({
  rating,
  title,
  createdAt,
  text,
  repoId,
  reviewId,
  isMyReviews,
}) => {
  const navigate = useNavigate();
  const [mutate] = useMutation(DELETE_REVIEW, {
    variables: { deleteReviewId: reviewId },
    refetchQueries: [GET_CURRENT_USER],
  });

  const handleNavigate = () => navigate(`/repository/${repoId}`);

  const handleDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "CANCEL",
          style: "cancel",
        },
        { text: "DELETE", onPress: async () => await mutate() },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.roundedText}>{rating}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text fontSize={"subheading"} fontWeight={"bold"}>
            {title}
          </Text>
          <Text fontSize={"subheading"}>
            {format(new Date(createdAt), "dd.MM.yyyy")}
          </Text>
          <Text fontSize={"subheading"}>{text}</Text>
        </View>
      </View>
      {isMyReviews && (
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleNavigate}>
            <Text
              fontSize={"subheading"}
              color={"textSecondary"}
              style={styles.viewText}
            >
              View repository
            </Text>
          </Pressable>
          <Pressable onPress={handleDelete}>
            <Text
              fontSize={"subheading"}
              color={"textSecondary"}
              style={styles.deleteText}
            >
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
