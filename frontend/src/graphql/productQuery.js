import { gql } from "@apollo/client";

export const PRODUCT_ID_QUERY = gql`
  query($productId: MongoID!) {
    productById(_id: $productId) {
      name
      media
      price
      stock
      category
      brand
    }
  }
`;

export const PRODUCT_QUERY = gql`
  query {
    product {
      _id
      name
      media
      price
    }
  }
`;
