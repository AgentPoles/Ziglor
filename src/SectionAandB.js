import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Samples from "./SectionB/Index";
import UserComponent from "./SectionC";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider, useTheme } from "@material-ui/core/styles";

const useStylesa = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  user_item: {
    flexGrow: 2,
  },
  volunteer_item: {
    marginLeft: "100px",
    flexGrow: 1,
    maxWidth: "340px",
  },
}));

const useStylesb = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  user_item: {
    flexGrow: 2,
  },
  volunteer_item: {
    marginTop: "50px",
    marginBottom: "50px",
    flexGrow: 1,
    maxWidth: "340px",
    alignSelf: "center",
  },
}));

const SectionAandB = () => {
  const theme = useTheme();
  const classa = useStylesa();
  const classb = useStylesb();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  if (matches) {
    let classes = classa;
    return (
      <div>
        <section className={classes.container}>
          <div style={{ flex: 2 }}>
            <UserComponent />
          </div>
          <div className={classes.volunteer_item}>
            <Samples />
          </div>
        </section>
      </div>
    );
  } else {
    let classes = classb;
    return (
      <div>
        <section className={classes.container}>
          <div className={classes.user_item}>
            <UserComponent />
          </div>

          <div className={classes.volunteer_item}>
            <Samples />
          </div>
        </section>
      </div>
    );
  }
};

const theme = createTheme();

export default function ThemeHelper() {
  return (
    <ThemeProvider theme={theme}>
      <SectionAandB />
    </ThemeProvider>
  );
}
