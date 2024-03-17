import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import formatLargeCounts from "../utils/formatLargeCounts";

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
});

const RepositoryItem = (props) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.definitionContainer}>
        <Image
          style={styles.image}
          source={{ uri: props.ownerAvatarUrl }}
        ></Image>
        <View style={styles.definitionTextContainer}>
          <Text fontWeight={"bold"} fontSize={"subheading"}>
            {props.fullName}
          </Text>
          <Text>{props.description}</Text>
          <Text style={styles.language} color={"textSecondary"}>
            {props.language}
          </Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.singleStatContainer}>
          <Text fontWeight={"bold"} fontSize={"subheading"}>
            {formatLargeCounts(props.stargazersCount)}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.singleStatContainer}>
          <Text fontWeight={"bold"} fontSize={"subheading"}>
            {formatLargeCounts(props.forksCount)}
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.singleStatContainer}>
          <Text fontWeight={"bold"} fontSize={"subheading"}>
            {formatLargeCounts(props.reviewCount)}
          </Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.singleStatContainer}>
          <Text fontWeight={"bold"} fontSize={"subheading"}>
            {formatLargeCounts(props.ratingAverage)}
          </Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
