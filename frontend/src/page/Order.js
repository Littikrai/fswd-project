import React from "react";
import Container from "@material-ui/core/Container";
import { useQuery } from "@apollo/client";
import { QUERY_ORDER } from "../graphql/orderQuery";
import { useSession } from "../contexts/SessionContext";
import TableOrder from "../component/TableOrder";

export default function Order() {
  const { user } = useSession();
  const { loading, error, data } = useQuery(QUERY_ORDER, {
    variables: { cusId: user?._id },
  });
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    console.log(error.message);
    return "Error !!";
  }
  const info = {
    title: "Order",
    head1: "Address",
    head2: "Total Price",
    head3: "Date",
  };
  return (
    <Container>
      <TableOrder info={info} data={data?.Order} detail={true} />
    </Container>
  );
}
