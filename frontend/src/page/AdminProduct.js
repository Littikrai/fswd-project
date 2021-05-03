import React from "react";
import Container from "@material-ui/core/Container";
import TableAdmin from "../component/TableAdmin";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export default function AdminProduct() {
  const info = {
    title: "Product",
    head1: "Product Name",
    head2: "Brand",
    head3: "Price",
    head4: "Stock",
    head5: "Latest Update",
  };
  return (
    <Container>
      <TableAdmin info={info} data={rows} />
    </Container>
  );
}
