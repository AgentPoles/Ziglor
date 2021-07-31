import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomePage from "./Homepage/Index";
import LogInPage from "./LogInPage";
import SignUpPage from "./SignUpPage";
import DashBoard from "./DashBoard";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./SignUpPage/SignUp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    textDecoration: "none",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar variant="dense">
            <div>
              <Link className={classes.links} to="/">
                <Typography
                  variant="h6"
                  className={classes.title}
                  style={{ color: "#c80352" }}
                >
                  Ziglor
                </Typography>
              </Link>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <Link className={classes.links} to="/login">
                <Button
                  size="small"
                  color="inherit"
                  style={{ color: "#c80352" }}
                >
                  Login
                </Button>
              </Link>
            </div>
            <Link className={classes.links} to="/signup">
              <Button size="small" color="inherit" style={{ color: "#c80352" }}>
                Signup
              </Button>
            </Link>
            <Link className={classes.links} to="/dashboard">
              <Button size="small" color="inherit" style={{ color: "#c80352" }}>
                Dashboard
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <div
          style={{
            marginTop: "1px",
            paddingTop: "40px",
            paddingBottom: "50px",
            backgroundColor: "#f0f0f5",
          }}
        >
          <div>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login">
                <LogInPage />
              </Route>
              <Route path="/signup">
                <SignUpPage />
              </Route>
              <Route path="/dashboard">
                <DashBoard />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
