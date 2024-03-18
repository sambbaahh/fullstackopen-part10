import { FlatList, View, StyleSheet, Pressable } from "react-native";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import { GET_REPOSITORIES } from "../graphql/queries";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

const SortPicker = (props) => (
  <Picker {...props}>
    <Picker.Item
      label={"Select an item..."}
      enabled={false}
      style={{ color: "gray" }}
    />
    <Picker.Item
      label="Latest repositories"
      value={JSON.stringify({ orderBy: "CREATED_AT", orderDirection: "DESC" })}
    ></Picker.Item>
    <Picker.Item
      label="Highest rated repositories"
      value={JSON.stringify({
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
      })}
    ></Picker.Item>
    <Picker.Item
      label="Lowest rated repositories"
      value={JSON.stringify({
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      })}
    ></Picker.Item>
  </Picker>
);

const RepositoryList = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(
    JSON.stringify({ orderBy: "CREATED_AT", orderDirection: "DESC" })
  );

  const changeOrder = (itemValue) => {
    setOrder(itemValue);
  };

  const handleNavigate = (id) => {
    navigate(`/repository/${id}`);
  };

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: `${JSON.parse(order).orderBy}`,
      orderDirection: `${JSON.parse(order).orderDirection}`,
    },
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
      ListHeaderComponent={
        <SortPicker
          selectedValue={order}
          onValueChange={changeOrder}
          placeholder={{ label: "select.." }}
        />
      }
    />
  );
};

export default RepositoryList;
