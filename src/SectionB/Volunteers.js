import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import VolunteersDetails from "./VolunteersDetails";
import VolunteersSummary from "./VolunteersSummary";
import VolunteersData from "../data/VolunteersData";

const useStyles = makeStyles((theme) => ({
  roota: {
    width: "100%",
    marginRight: "10px",
    marginTop: "5px",
  },
  rootb: {
    width: "100%",
    marginLeft: "10px",
    marginTop: "5px",
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
    flexBasis: "33.33%",
    display: "flex",
    flexDirection: "column",
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

let dVolunteers = VolunteersData;

export default function Volunteers() {
  const classes = useStyles();
  let nounce = 1;
  return dVolunteers.map((volunteer, index) => {
    if (nounce == 1) {
      nounce = 0;
      return (
        <div key={index} className={classes.roota}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <VolunteersSummary {...volunteer} />
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <VolunteersDetails />
            </AccordionDetails>
            <Divider />
          </Accordion>
        </div>
      );
    } else {
      nounce = 1;
      return (
        <div key={index} className={classes.rootb}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <VolunteersSummary {...volunteer} />
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <VolunteersDetails />
            </AccordionDetails>
            <Divider />
          </Accordion>
        </div>
      );
    }
  });
}
