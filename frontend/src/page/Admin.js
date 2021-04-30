import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  head: {
    textAlign: "left",
  },
  lineHead: {
    marginBottom: theme.spacing(3),
    height: "3px",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  rightBut: {
    textAlign: "right",
  },
}));
export default function Admin() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={6}>
          <Typography className={classes.head} variant="h4">
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.rightBut}>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginRight: 15 }}
            component={Link}
            to="/admin/product"
          >
            Product
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/admin/promotion"
          >
            Promotion
          </Button>
        </Grid>
      </Grid>
      <div className={classes.lineHead} />
    </Container>
  );
}
