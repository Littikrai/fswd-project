import { gql } from "@apollo/client";

export const CART_QUERY = gql`
  query($cartId: MongoID!) {
    CartTCById(_id: $cartId) {
      _id
      totalPrice
      customerId
    }
  }
`;
