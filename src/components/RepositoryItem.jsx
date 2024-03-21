import { View, Image, Pressable } from "react-native";
import * as Linking from "expo-linking";

import Text from "./Text";
import formatLargeCounts from "../utils/formatLargeCounts";
import styles from "../styles/repositoryItem";

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
      {props.url && (
        <Pressable onPress={() => Linking.openURL(props.url)}>
          <Text
            color={"textSecondary"}
            style={styles.linkButton}
            fontSize={"subheading"}
          >
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
