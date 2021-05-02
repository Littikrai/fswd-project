import { gql } from "@apollo/client";

export const QUERY_ORDER = gql`
  query($cusId: String!) {
    Order(filter: { customerId: $cusId }) {
      _id
      totalPrice
      customerId
      createAt
      address
    }
  }
`;

export const QUERY_ID_ORDER = gql`
  query($orderID: MongoID!) {
    OrderTCById(_id: $orderID) {
      _id
      totalPrice
      customerId
      createAt
      address
      item {
        name
        media
        quantity
        price
        total
      }
    }
  }
`;
