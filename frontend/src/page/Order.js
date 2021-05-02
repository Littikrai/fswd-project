import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useQuery } from "@apollo/client";
import { QUERY_ORDER } from "../graphql/orderQuery";
import { useSession } from "../contexts/SessionContext";
import TableOrder from "../component/TableOrder";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  head: {
    textAlign: "left",
    marginBottom: theme.spacing(4),
  },
  rightBut: {
    textAlign: "right",
  },
}));

export default function Order() {
  const classes = useStyles();
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
