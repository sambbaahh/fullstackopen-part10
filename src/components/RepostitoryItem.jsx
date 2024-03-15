import { View, Text, StyleSheet, Image } from "react-native";

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
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    fontSize: 15,
  },
  language: {
    backgroundColor: "#0764d1",
    color: "white",
    fontSize: 15,
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
  statCount: {
    fontSize: 15,
    fontWeight: "bold",
  },
  statDefinition: {
    fontSize: 15,
    color: "#848485",
  },
});

const RepositoryItem = (props) => {
  const formatLargeCounts = (count) => {
    if (count > 999) {
      return Math.sign(count) * (Math.abs(count) / 1000).toFixed(1) + "k";
    } else {
      return count;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.definitionContainer}>
        <Image
          style={styles.image}
          source={{ uri: props.ownerAvatarUrl }}
        ></Image>
        <View style={styles.definitionTextContainer}>
          <Text style={styles.title}>{props.fullName}</Text>
          <Text style={styles.description}>{props.description}</Text>
          <Text style={styles.language}>{props.language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.singleStatContainer}>
          <Text style={styles.statCount}>
            {formatLargeCounts(props.stargazersCount)}
          </Text>
          <Text style={styles.statDefinition}>Stars</Text>
        </View>
        <View style={styles.singleStatContainer}>
          <Text style={styles.statCount}>
            {formatLargeCounts(props.forksCount)}
          </Text>
          <Text style={styles.statDefinition}>Forks</Text>
        </View>
        <View style={styles.singleStatContainer}>
          <Text style={styles.statCount}>
            {formatLargeCounts(props.reviewCount)}
          </Text>
          <Text style={styles.statDefinition}>Reviews</Text>
        </View>
        <View style={styles.singleStatContainer}>
          <Text style={styles.statCount}>
            {formatLargeCounts(props.ratingAverage)}
          </Text>
          <Text style={styles.statDefinition}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
