import { gql } from "@apollo/client";

export const PRODUCT_Mutation = gql`
  mutation ($name, $media, $price, $stock, $category, $brand) {
    createProduct(
      record: {
        name: $name
        media: $media
        price: $price
        stock: $stock
        category: $category
        brand: $brand
      }
    ) {
      recordId
    }
  }
`;
