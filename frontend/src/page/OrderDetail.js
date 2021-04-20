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
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, "Delete"),
  createData("Ice cream sandwich", 237, 9.0, 37, "Delete"),
  createData("Eclair", 262, 16.0, 24, "Delete"),
  createData("Cupcake", 305, 3.7, 67, "Delete"),
  createData("Gingerbread", 356, 16.0, 49, "Delete"),
];

export default function OrderDetail() {
  const classes = useStyles();
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
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      width="30%"
                      component="th"
                      scope="row"
                      align="center"
                    >
                      <img
                        className={classes.cardMedia}
                        src="https://source.unsplash.com/random"
                        alt={"image-goods-" + row.name}
                      />
                    </TableCell>
                    <TableCell width="30%" align="left">
                      <div className={classes.nameProduct}>{row.name}</div>
                    </TableCell>
                    <TableCell width="10%" align="center">
                      {row.calories}
                    </TableCell>
                    <TableCell width="10%" align="center">
                      {row.fat}
                    </TableCell>
                    <TableCell width="10%" align="center">
                      {row.carbs}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className={classes.bot}>
            <Typography variant="h4" color="primary">
              Total: ฿ 250
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
