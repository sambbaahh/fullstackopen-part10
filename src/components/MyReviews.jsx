import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";

import { GET_CURRENT_USER } from "../graphql/queries";
import ReviewItem from "./ReviewItem";
import { ItemSeparator } from "./ItemSeparator";

const MyReviews = () => {
  const { loading, data } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });

  if (loading || !data) {
    return null;
  }

  const items = data.me.reviews.edges.map((edge) => edge.node);

  return (
    <FlatList
      data={items}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }, index) => (
        <ReviewItem
          key={index}
          rating={item.rating}
          createdAt={item.createdAt}
          text={item.text}
          reviewId={item.id}
          title={item.repository.fullName}
          repoId={item.repository.id}
          isMyReviews={true}
        />
      )}
    />
  );
};

export default MyReviews;
