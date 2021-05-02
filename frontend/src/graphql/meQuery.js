import { gql } from "@apollo/client";

export const ME_QUERY = gql`
  query {
    me {
      _id
      name
      cart {
        _id
        customerId
        totalPrice
        item {
          name
          price
          media
          quantity
          total
        }
      }
    }
  }
`;
