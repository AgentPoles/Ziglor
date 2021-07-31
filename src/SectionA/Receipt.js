import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 400,
    zIndex: 2000,
  },
  cells: {
    paddingLeft: 30,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default function Receipt() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell align="center" className={classes.cells}>
              <h3 style={{ color: "#c80352" }}>Adam Back</h3>
            </TableCell>

            <TableCell className={classes.cells}>
              <h5 style={{ color: "#c80352" }}>27/11/2021</h5>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cells}>
              <h6>Receipt Number:</h6>
            </TableCell>
            <TableCell className={classes.cells}>
              <Typography variant="overline" display="block" gutterBottom>
                12erflf
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cells}>
              <h6>Received from:</h6>
            </TableCell>
            <TableCell className={classes.cells}>
              <Typography variant="overline" display="block" gutterBottom>
                John Doe
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cells}>
              <h6>Amount:</h6>
            </TableCell>
            <TableCell className={classes.cells}>
              <Typography variant="overline" display="block" gutterBottom>
                1000 NGC
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cells}>
              <h6>For:</h6>
            </TableCell>
            <TableCell className={classes.cells}>
              <Typography variant="overline" display="block" gutterBottom>
                purpose
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
