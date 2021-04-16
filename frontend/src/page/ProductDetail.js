import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  page: {
    marginTop: theme.spacing(4),
  },
  media: {
    height: 350,
  },
}));

export default function ProductDetail() {
  const classes = useStyles();
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
          {/* <img
            src="https://source.unsplash.com/random"
            alt="hello"
            width="150px"
            hight="250px"
          /> */}
          {/* <Typography variant="contained" color="primary">
            Main call to actionMain call to actionMain call to actionMain call
            to actionMain call to actionMain call to action
          </Typography> */}
        </Grid>
        <Grid item xs={7} style={{ textAlign: "left" }}>
          <Typography variant="h5" color="primary">
            Secondary action
          </Typography>
          <Typography variant="h3" color="primary">
            ฿285
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
