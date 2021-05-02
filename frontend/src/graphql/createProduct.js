import { gql } from "@apollo/client";

export const createProduct = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
    }
  }
`;
