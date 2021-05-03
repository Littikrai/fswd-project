import React from "react";
import Create from "../component/Create";
import { Container } from "@material-ui/core";

export default function CreateProduct() {
  const data = {
    title: "Create Product",
    field1: "Product Name",
    field2: "Band",
    field3: "Stock",
    field4: "Price",
  };
  return (
    <Container maxWidth="md">
      <Create data={data} />
    </Container>
  );
}
