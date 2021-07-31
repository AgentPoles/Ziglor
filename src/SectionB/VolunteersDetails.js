import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 200,
    maxWidth: 300,
    backgroundColor: "#f8f8f8",
  },
  small_pink: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  widthe: {
    maxWidth: 100,
    width: 80,
  },
}));

const VolunteersDetails = ({ username, password, public_key, seed_phrase }) => {
  let userName = username || "username";
  let passWord = password || "password";
  let publicKey = public_key || "nothing here yet";
  let seedPhrase = seed_phrase || "nothing here yet";

  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody className={classes.widthe}>
            <TableRow>
              <TableCell>
                {" "}
                <Typography variant="overline" display="block" gutterBottom>
                  Username:
                </Typography>
              </TableCell>
              <TableCell>
                <div className={classes.widthe}>
                  <Typography
                    noWrap={true}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    {userName}
                  </Typography>
                </div>
              </TableCell>
              <TableCell>
                <label htmlFor="icon-button-file">
                  <IconButton
                    aria-label="copy text"
                    component="span"
                    size="small"
                  >
                    <FileCopyOutlinedIcon fontSize="small" />
                  </IconButton>
                </label>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <Typography variant="overline" display="block" gutterBottom>
                  Password:
                </Typography>
              </TableCell>
              <TableCell>
                <div className={classes.widthe}>
                  <Typography
                    noWrap={true}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    {passWord}
                  </Typography>
                </div>
              </TableCell>
              <TableCell>
                <label htmlFor="icon-button-file">
                  <IconButton
                    aria-label="copy text"
                    component="span"
                    size="small"
                  >
                    <FileCopyOutlinedIcon fontSize="small" />
                  </IconButton>
                </label>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <Typography variant="overline" display="block" gutterBottom>
                  Public Key:
                </Typography>
              </TableCell>
              <TableCell>
                <div className={classes.widthe}>
                  <Typography
                    noWrap={true}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    {publicKey}
                  </Typography>
                </div>
              </TableCell>
              <TableCell>
                <label htmlFor="icon-button-file">
                  <IconButton
                    aria-label="copy text"
                    component="span"
                    size="small"
                  >
                    <FileCopyOutlinedIcon fontSize="small" />
                  </IconButton>
                </label>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <Typography variant="overline" display="block" gutterBottom>
                  Seed Phrase:
                </Typography>
              </TableCell>
              <TableCell>
                <div className={classes.widthe}>
                  <Typography
                    noWrap={true}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    {seedPhrase}
                  </Typography>
                </div>
              </TableCell>
              <TableCell>
                <label htmlFor="icon-button-file">
                  <IconButton
                    aria-label="copy text"
                    component="span"
                    size="small"
                  >
                    <FileCopyOutlinedIcon fontSize="small" />
                  </IconButton>
                </label>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VolunteersDetails;
