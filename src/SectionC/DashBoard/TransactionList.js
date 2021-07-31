import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import { Paper } from "@material-ui/core";
import TranscationItem from "./TranscationItem";
import { Typography } from "@material-ui/core";
import DemoTransactions from "../../data/DemoTransactionsData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  roote: {
    display: "flex",
    flexDirection: "column",
    width: "86%",
    padding: "30px",
  },
}));

function renderRow({ name, amount, public_key, sent, received, index, style }) {
  return (
    <ListItem button style={style} key={index}>
      <TranscationItem
        name={name}
        amount={amount}
        public_key={public_key}
        sent={sent}
        received={received}
      />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.roote}>
        <div>
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: "#a7abb4", marginBottom: "20px" }}
          >
            Transactions
          </Typography>
        </div>

        <div>
          {DemoTransactions.map((transaction) => renderRow({ ...transaction }))}
        </div>
      </Paper>
    </div>
  );
}
