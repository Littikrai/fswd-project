import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "100%",
  },
  upImg: {
    width: "100%",
    height: 250,
    marginBottom: theme.spacing(3),
  },
  form: {
    width: "80%",
  },
  card: {
    padding: 25,
  },
  hard: {
    textAlign: "left",
  },
}));

export default function Create({ data }) {
  const { title, field1, field2, field3, field4 } = data;
  const [image, setImage] = React.useState(null);
  const classes = useStyles();

  const handleFile = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <from autoComplete="off" className={classes.from}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <div className={classes.upImg}>
                <img src={image} className={classes.img} alt="updates" />
              </div>
              <Button variant="contained" component="label">
                Upload File
                <input type="file" hidden onChange={handleFile} />
              </Button>
            </Grid>
            <Grid container xs={8} spacing={1}>
              <Grid xs={12} className={classes.hard}>
                <Typography variant="h6">{title}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label={field1}
                  required
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label={field2}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  type="Number"
                  fullWidth
                  label={field3}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  type="Number"
                  fullWidth
                  label={field4}
                  variant="outlined"
                />
              </Grid>
              <Grid xs={12}>
                <Button variant="contained" color="primary">
                  Create
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </from>
      </CardContent>
    </Card>
  );
}
