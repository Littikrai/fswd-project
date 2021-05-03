import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
  cardMedia: {
    height: 20,
    marginTop: 10,
    paddingTop: "42%", // 16:9
  },
  bot: {
    marginTop: theme.spacing(5),
    textAlign: "right",
  },
  checkout: {
    textAlign: "right",
  },
}));

export default function Cart() {
  const classes = useStyles();

  const { cart } = useSession();

  return (
    <>
      <Container className={classes.container}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Unit Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart?.item.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ textAlign: "center" }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={"http://localhost:4000/img/" + row.media + ".jpg"}
                      title="Image title"
                    />
                  </TableCell>
                  <TableCell align="center"> {row.name} </TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center">{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.bot}>
          <Typography variant="h4" color="primary">
            Total: {cart?.totalPrice} ฿
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.checkout}
            size="large"
            component={Link}
            to="/checkout"
          >
            Check out
          </Button>
        </div>
      </Container>
    </>
  );
}
