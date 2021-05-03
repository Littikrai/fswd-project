import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";
import {
  Button,
  Card,
  CardMedia,
  Container,
  TextField,
  CardContent,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { PRODUCT_ID_QUERY } from "../graphql/productQuery";
import { useSession } from "../contexts/SessionContext";

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
  spec: {
    textAlign: "left",
    textTransform: "uppercase",
  },
}));

export default function ProductDetail() {
  const [amount, setAmount] = React.useState(1);
  // const [item, setItems] = React.useState([]);
  const { addItem } = useSession();
  const classes = useStyles();
  const { id } = useParams();
  const { loading, error, data } = useQuery(PRODUCT_ID_QUERY, {
    variables: { productId: id },
  });
  const product = data?.productById;

  // React.useEffect(() => {
  //   setItems(cart?.item);
  // }, [loading, data, cart]);

  // await setItems([
  //   ...item,
  //   {
  //     media: product.media,
  //     name: product.name,
  //     price: product.price,
  //     quantity: amount,
  //   },
  // ]);

  const handleAddCart = React.useCallback(
    async (e) => {
      e.preventDefault();
      const item = {
        media: product?.media,
        name: product?.name,
        price: product?.price,
        quantity: amount,
      };
      await addItem(item);
    },
    [addItem, amount, product]
  );
  // console.log(amount);
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    console.log(error);
    return "Error !!";
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} className={classes.page}>
        <Grid item xs={5}>
          <Card>
            <CardMedia
              className={classes.media}
              image={"http://localhost:4000/img/" + product.media + ".jpg"}
            />
          </Card>
        </Grid>
        <Grid item xs={7} style={{ textAlign: "left" }}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h3" color="primary">
            {product.price}฿
          </Typography>
          <div className={classes.buttGroup}>
            <Typography variant="subtitle1">Amount</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              type={"number"}
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className={classes.textField}
            />
            <Typography variant="subtitle1">
              {product.stock} piece available
            </Typography>
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
                onClick={handleAddCart}
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
          <Card className={classes.spec}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Product Specifications
              </Typography>
              <Typography variant="body1">
                Category : {product.category}
              </Typography>
              <Typography variant="body1">Brand : {product.brand}</Typography>
              <Typography variant="body1">Stock : {product.stock}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
