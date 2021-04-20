import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    textAlign: "left",
  },
  cardCon: {
    minWidth: 275,
    marginTop: theme.spacing(4),
    textAlign: "left",
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    textAlign: "center",
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
  StyButton: {
    marginLeft: "auto",
  },
}));

export default function Payment() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="sm" className={classes.container}>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4">Payment summary</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">เงินที่เหลือ</Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Typography variant="h6" color="primary">
                  8000
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Payment amount</Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Typography variant="h6" color="primary">
                  10000
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Balance</Typography>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Typography variant="h6" color="primary">
                  2000
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              className={classes.StyButton}
              size="medium"
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Payment
            </Button>
          </CardActions>
        </Card>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm payment"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button
            onClick={handleClose}
            color="primary"
            autoFocus
            component={Link}
            to="/"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
