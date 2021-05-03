import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  barBack: {
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "flex",
  },
  title: {
    display: "block",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const { user, logout: handleLogout, cart } = useSession();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const isMenuOpen = Boolean(anchorEl);
  useEffect(() => {
    if (cart?.item) {
      setCount(cart?.item.length);
    }
  }, [cart]);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  function onClick(event) {
    handleMenuClose();
    handleLogout();
  }

  const menuId = "hi";

  // let history = useHistory();

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} component={Link} to="/customer">
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link} to="/customer/order">
        My order
      </MenuItem>
      {/* <MenuItem onClick={handleMenuClose} component={Link} to="/admin">
        Admin
      </MenuItem> */}
      <MenuItem onClick={onClick} component={Link} to="/">
        Sign out
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color={"primary"}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            <Typography variant="h6" className={classes.title} noWrap>
              Tag Mall
            </Typography>
          </Link>
          <div className={classes.root} />
          <div className={classes.menuButton}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={count} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {user ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <Button color="inherit" component={Link} to="/signin">
                SIGN IN
              </Button>
            )}

            {/* <Button color="inherit" onClick={goSignUp}>
              SIGN UP
            </Button> */}
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
