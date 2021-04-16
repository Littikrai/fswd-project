import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardMedia,
  Container,
  TextField,
  Fab,
  CardContent,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  page: {
    marginTop: theme.spacing(4),
  },
  media: {
    height: 350,
  },
  paper: {
    padding: theme.spacing(3),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
  buttonSel: {
    width: "80%",
  },
  buttGroup: {
    marginLeft: "2%",
  },
  textField: {
    width: "50%",
    padding: 0,
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
}));

export default function ProductDetail() {
  const classes = useStyles();
  const [value, setValue] = React.useState({
    amount: 1,
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    setValue(value.amount + 1);
  };

  const handleRemove = () => {
    setValue(value.amount - 1);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} className={classes.page}>
        <Grid item xs={5}>
          <Card>
            <CardMedia
              className={classes.media}
              image="https://source.unsplash.com/random"
            />
          </Card>
        </Grid>
        <Grid item xs={7} style={{ textAlign: "left" }}>
          <Typography variant="h4">Goods Name</Typography>
          <Typography variant="h3" color="primary">
            ฿285
          </Typography>
          <div className={classes.buttGroup}>
            {/* <Fab
              color="primary"
              aria-label="remove"
              style={{ height: 25, width: 35 }}
              onClick={handleRemove}
            >
              <RemoveIcon />
            </Fab> */}
            <Typography variant="subtitle1">Amount</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              type={"number"}
              value={value.amount}
              onChange={handleChange}
              className={classes.textField}
            />
            <Typography variant="subtitle1">50 piece available</Typography>
            {/* <Fab
              color="primary"
              aria-label="add"
              style={{ height: 25, width: 35 }}
              onClick={handleAdd}
            >
              <AddIcon />
            </Fab> */}
          </div>
          <Grid container spacing={2} xs={10} className={classes.paper}>
            <Grid xs={12} sm={6}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.buttonSel}
              >
                Add to cart
              </Button>
            </Grid>
            <Grid xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonSel}
              >
                Buy Goods
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Product Specifications
              </Typography>
              <Typography variant="body1">
                Category :{'"a benevolent smile"'}
              </Typography>
              <Typography variant="body1">
                Brand :{'"a benevolent smile"'}
              </Typography>
              <Typography variant="body1">
                Stock :{'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
