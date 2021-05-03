import React from "react";
import Create from "../component/Create";
import { Container } from "@material-ui/core";

export default function CreatePromotion() {
  const data = {
    title: "Create Promotion",
    field1: "Promotion Name",
    field2: "Detail",
    field3: "Discount",
    field4: "Stock",
  };
  return (
    <Container maxWidth="md">
      <Create data={data} />
    </Container>
  );
}
