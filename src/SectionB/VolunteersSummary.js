import React from "react";
import DefaultPerson from "../assets/default.png";
import { Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
  priceshow: {
    marginLeft: "5px",
    fontSize: theme.typography.pxToRem(10),
    color: "#C80352",
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const VolunteersSummary = ({ img, name, balance }) => {
  const classes = useStyles();
  let accountName = name || "Name";
  let accountBalance = balance || "9000";
  let accountImage = img || DefaultPerson;

  return (
    <div className={classes.root}>
      <div className={classes.column}>
        {/* <Typography className={classes.heading}>Location</Typography> */}
        <Avatar src={accountImage} alt={accountName}></Avatar>
      </div>
      <div className={classes.column}>
        <Typography
          className={classes.secondaryHeading}
          noWrap={true}
          variant="h5"
        >
          {accountName}
        </Typography>
      </div>
      <div></div>
      <div className={classes.column} style={{ marginLeft: "auto" }}>
        <div style={{ display: "inline" }}>
          <Typography
            className={classes.secondaryHeading}
            noWrap={true}
            display="inline"
            variant="h6"
          >
            {accountBalance}
          </Typography>
          <Typography
            className={classes.priceshow}
            noWrap={true}
            display="inline"
            variant="h6"
          >
            NGC
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default VolunteersSummary;
