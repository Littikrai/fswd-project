import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  head: {
    textAlign: "left",
  },
  cardMedia: {
    height: 150,
    width: 180,
  },
  cardAct: {
    marginLeft: "auto",
  },
  card: {
    marginTop: theme.spacing(4),
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, "Delete")];

export default function Order() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg" className={classes.container}>
      <CssBaseline />
      <Typography className={classes.head} variant="h4">
        All order
      </Typography>
      <Card className={classes.card}>
        <CardContent>
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
        </CardContent>
        <CardActions>
          <Button
            className={classes.cardAct}
            size="medium"
            color="primary"
            variant="contained"
            component={Link}
            to="/customer/order/1"
          >
            Detail
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
