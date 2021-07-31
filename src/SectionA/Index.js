import React from "react";
import Search from "./Search";
import Receipt from "./Receipt";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 70,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const Index = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  if (checked) {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search
          style={{ alignSelf: "center" }}
          onSearched={() => {
            handleChange();
          }}
        />

        <div className={classes.root}>
          <div>
            <Grow in={checked}>
              <Paper elevation={4} className={classes.paper}>
                <Receipt />
              </Paper>
            </Grow>
            {/* Conditionally applies the timeout prop to change the entry speed. */}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search
          style={{ alignSelf: "center" }}
          onSearched={() => {
            handleChange();
          }}
        />
        <div className={classes.root}>
          <div>
            {/* <Grow in={checked}>
              <Paper elevation={4} className={classes.paper}>
                <Receipt />
              </Paper>
            </Grow> */}
            {/* Conditionally applies the timeout prop to change the entry speed. */}
          </div>
        </div>
      </section>
    );
  }
};

export default Index;
