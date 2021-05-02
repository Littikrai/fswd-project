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
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

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

export default function TableOrder({ info, data }) {
  const { title, head1, head2, head3, head4, head5 } = info;
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography className={classes.head} variant="h4">
            {title}
          </Typography>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{head1}</TableCell>
              <TableCell align="center">{head2}</TableCell>
              <TableCell align="center">{head3}</TableCell>
              <TableCell align="center">Action</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.address}
                </TableCell>
                <TableCell align="center">{row.totalPrice}</TableCell>
                <TableCell align="center">
                  {row.createAt.slice(0, 10)}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={"/customer/order/" + row._id}
                  >
                    Detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
