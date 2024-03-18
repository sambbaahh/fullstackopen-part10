import { FlatList } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";

import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import { GET_SINGLE_REPOSITORY } from "../graphql/queries";
import { ItemSeparator } from "./RepostitoryList";

const SingleRepository = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  if (loading || !data) {
    return null;
  }

  const { reviews, ...repository } = data.repository;

  const reviewNodes = reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem {...item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem {...repository} />
          <ItemSeparator />
        </>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
