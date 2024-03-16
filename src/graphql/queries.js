import { gql } from "@apollo/client";
import { REPOSITORY_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          ...repositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const ME = gql`
  {
    me {
      id
      username
    }
  }
`;
