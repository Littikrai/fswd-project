import React from "react";
import {
  CardMedia,
  Container,
  CardContent,
  Grid,
  CardActionArea,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  head: {
    marginTop: theme.spacing(4),
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
}));

const cards = [1, 2, 3, 4];
function Promotion() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.cardGrid}>
        <Typography className={classes.head} variant="h4">
          All Promotion
        </Typography>
        <div className={classes.lineHead} />
        <Grid container spacing={3}>
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
        </Grid>
      </Container>
    </>
  );
}

export default Promotion;
