import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation($record: CreateOneUserInput!) {
    createUser(record: $record) {
      recordId
    }
  }
`;
