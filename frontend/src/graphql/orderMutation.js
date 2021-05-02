import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation($record: CreateOneOrderInput!) {
    createOrder(record: $record) {
      recordId
    }
  }
`;
