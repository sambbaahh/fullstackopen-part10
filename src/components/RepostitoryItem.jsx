import { View, Text } from "react-native";

const RepositoryItem = (props) => {
  return (
    <View>
      <Text>{props.id}</Text>
      <Text>{props.fullName}</Text>
      <Text>{props.description}</Text>
      <Text>{props.language}</Text>
      <Text>{props.forksCount}</Text>
      <Text>{props.stargazersCount}</Text>
      <Text>{props.ratingAverage}</Text>
      <Text>{props.reviewCount}</Text>
      <Text>{props.ownerAvatarUrl}</Text>
    </View>
  );
};

export default RepositoryItem;
