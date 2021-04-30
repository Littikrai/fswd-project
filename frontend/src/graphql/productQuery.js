import { gql } from "@apollo/client";

export const PRODUCT_ID_QUERY = gql`
  query($productId: String!) {
    productById(_id: $productId) {
      name
      media
    }
  }
`;

export const PRODUCT_QUERY = gql`
  query {
    product {
      _id
      name
      media
    }
  }
`;
