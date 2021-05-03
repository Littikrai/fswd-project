import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LinkM from "@material-ui/core/Link";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { PRODUCT_QUERY } from "../graphql/productQuery";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    marginTop: -22,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  head: {
    marginTop: theme.spacing(5),
    display: "block",
    textAlign: "left",
  },
  headR: {
    marginTop: theme.spacing(7),
    display: "block",
    textAlign: "right",
  },
  lineHead: {
    marginBottom: theme.spacing(3),
    height: "3px",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Home() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(PRODUCT_QUERY);
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    console.log(error.message);
    return "Error !!";
  }
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <div className={classes.heroContent}>
        {/* <Container maxWidth="sm"> */}
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome to Tagmall
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {/* {user ? user.name : "Login Please "} */}
        </Typography>
        {/* </Container> */}
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}

        {/* <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.head} variant="h4">
              Promotion
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <LinkM
              component={Link}
              to="/promotion"
              className={classes.headR}
              color="primary"
            >
              All Promotion
            </LinkM>
          </Grid>
        </Grid>
        <div className={classes.lineHead} /> */}

        {/* <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item key={card} xs={6} sm={4} md={3}>
              <CardActionArea component={Link} to="/product/1">
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    Heading
                  </Typography>
                </CardContent>
                <Typography color="primary">128$</Typography>
              </CardActionArea>
            </Grid>
          ))}
        </Grid> */}

        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.head} variant="h4">
              Product
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <LinkM
              component={Link}
              to="/product"
              className={classes.headR}
              color="primary"
            >
              All Products
            </LinkM>
          </Grid>
        </Grid>
        <div className={classes.lineHead} />

        <Grid container spacing={3}>
          {data.product.map((card) => (
            <Grid item key={card} xs={6} sm={4} md={3}>
              <CardActionArea component={Link} to={"/product/" + card._id}>
                <CardMedia
                  className={classes.cardMedia}
                  image={"http://localhost:4000/img/" + card.media + ".jpg"}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                </CardContent>
                <Typography color="primary">{card.price}฿</Typography>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}
