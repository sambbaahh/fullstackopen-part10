import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";

import { GET_CURRENT_USER } from "../graphql/queries";
import ReviewItem from "./ReviewItem";
import { ItemSeparator } from "./ItemSeparator";

const MyReviews = () => {
  const { loading, data } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
  });

  if (loading || !data) {
    return null;
  }

  const items = data.me.reviews.edges.map((edge) => edge.node);
  return (
    <FlatList
      data={items}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item: { repository, ...rest }, index }) => (
        <ReviewItem
          key={index}
          title={repository.fullName}
          {...repository}
          {...rest}
        />
      )}
    />
  );
};

export default MyReviews;
