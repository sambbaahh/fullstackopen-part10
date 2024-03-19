import { FlatList, StyleSheet, Pressable, TextInput } from "react-native";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import { useDebounce } from "use-debounce";

import RepositoryItem from "./RepositoryItem";
import { GET_REPOSITORIES } from "../graphql/queries";
import { Picker } from "@react-native-picker/picker";
import { ItemSeparator } from "./ItemSeparator";

export const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "white",
    height: 50,
    padding: 10,
    margin: 10,
  },
});

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
      style={{ color: "black" }}
    ></Picker.Item>
    <Picker.Item
      label="Highest rated repositories"
      value={JSON.stringify({
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
      })}
      style={{ color: "black" }}
    ></Picker.Item>
    <Picker.Item
      label="Lowest rated repositories"
      value={JSON.stringify({
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      })}
      style={{ color: "black" }}
    ></Picker.Item>
  </Picker>
);

const RepositoryList = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(
    JSON.stringify({ orderBy: "CREATED_AT", orderDirection: "DESC" })
  );

  const [search, setSearch] = useState("");
  const [searchDebounce] = useDebounce(search, 500);

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
      searchKeyword: searchDebounce,
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
        <>
          <TextInput
            placeholder="Search"
            style={styles.searchBar}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          <SortPicker
            selectedValue={order}
            onValueChange={changeOrder}
            placeholder={{ label: "select.." }}
            selectionColor={"black"}
          />
        </>
      }
    />
  );
};

export default RepositoryList;
