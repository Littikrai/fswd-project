import { gql } from "@apollo/client";

export const CREATE_CART = gql`
  mutation($record: CreateOneCartInput!) {
    createCart(record: $record) {
      recordId
    }
  }
`;

export const UPDATE_CART = gql`
  mutation($cartId: MongoID!, $record: UpdateByIdCartInput!) {
    updateCartById(_id: $cartId, record: $record) {
      recordId
    }
  }
`;
