import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "@apollo/client";
import { QUERY_ID_ORDER } from "../graphql/orderQuery";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    textAlign: "left",
  },
  cardMedia: {
    height: 150,
    width: 150,
    // paddingTop: "38%", // 16:9
  },
  cardCon: {
    minWidth: 275,
    marginTop: theme.spacing(4),
    textAlign: "left",
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  title: {
    fontSize: 14,
  },
  nameProduct: {
    display: "flex",
    alignItems: "center",
    marginLeft: 15,
  },
  table: {
    minWidth: 650,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  bot: {
    marginTop: theme.spacing(5),
    textAlign: "right",
  },
}));

export default function OrderDetail() {
  const { id } = useParams();
  const classes = useStyles();
  const { loading, error, data } = useQuery(QUERY_ID_ORDER, {
    variables: { orderID: id },
  });
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    console.log(error.message);
    return "Error !!";
  }
  const item = data?.OrderTCById?.item;
  return (
    <Container>
      <Card className={classes.cardCon} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Order Detail
          </Typography>
          <TableContainer>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableBody>
                {item?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell
                      width="30%"
                      component="th"
                      scope="row"
                      align="center"
                    >
                      <img
                        className={classes.cardMedia}
                        src={"http://localhost:4000/img/" + row.media + ".jpg"}
                        alt={"image-goods-" + row.name + index}
                      />
                    </TableCell>
                    <TableCell width="30%" align="left">
                      <div className={classes.nameProduct}>{row.name}</div>
                    </TableCell>
                    <TableCell width="10%" align="center">
                      {row.price}
                    </TableCell>
                    <TableCell width="10%" align="center">
                      {row.quantity}
                    </TableCell>
                    <TableCell width="10%" align="center">
                      {row.total}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className={classes.bot}>
            <Typography variant="h4" color="primary">
              Total: ฿ {data?.OrderTCById?.totalPrice}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
