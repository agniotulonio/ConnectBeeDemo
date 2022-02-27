import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";
import logo from "../images/1.png";

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <div className={classes.brandContainer}>
        <img
          className={classes.image}
          src={logo}
          alt="ConnectBeeLogo"
          height="85"
          width="85"
        />
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
        >
          ConnectBee
        </Typography>
      </div>
      <Toolbar className={classes.Toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {" "}
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            className={classes.signInButton}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;