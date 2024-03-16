import { gql } from "@apollo/client";

export const REPOSITORY_DETAILS = gql`
  fragment repositoryDetails on Repository {
    id
    name
    ownerName
    createdAt
    fullName
    reviewCount
    ratingAverage
    forksCount
    description
    stargazersCount
    language
    ownerAvatarUrl
  }
`;
