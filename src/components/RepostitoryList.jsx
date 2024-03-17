import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import { GET_REPOSITORIES } from "../graphql/queries";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/repository/${id}`);
  };

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  const repositoryNodes =
    data && !loading ? data.repositories.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => handleNavigate(item.id)}>
          <RepositoryItem {...item} />
        </Pressable>
      )}
    />
  );
};

export default RepositoryList;
