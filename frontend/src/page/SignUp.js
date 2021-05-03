import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/createUser";
import { CREATE_CART } from "../graphql/createCart";
import { useHistory } from "react-router";
import { useSession } from "../contexts/SessionContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const history = useHistory();
  const classes = useStyles();
  const [record, setRecord] = React.useState({
    username: "",
    name: "",
    password: "",
  });
  const [createUser] = useMutation(CREATE_USER);
  const [createCart] = useMutation(CREATE_CART);
  const { login } = useSession();

  const handleRegister = React.useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const { data } = await createUser({ variables: { record } });
        await createCart({
          variables: { record: { customerId: data.createUser.recordId } },
        });
        await login(record.username, record.password);
        history.push("/");
        // alert("Register success");
      } catch (err) {
        console.log(err);
        alert("Register failed");
      }
    },
    [createUser, history, record, createCart, login]
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="na,e"
                label="Name"
                autoFocus
                onChange={(e) =>
                  setRecord((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                onChange={(e) =>
                  setRecord((prev) => ({ ...prev, username: e.target.value }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) =>
                  setRecord((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm password"
                label="Confirm password"
                type="password"
                id="confirm_password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleRegister}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
