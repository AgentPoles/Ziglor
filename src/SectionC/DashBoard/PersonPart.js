import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "@material-ui/core";
import Default from "../../assets/defaultperson.png";
import { Typography } from "@material-ui/core";
import SendTransaction from "./CircularIntegration";
import ConnectWallet from "./CircularIntegration";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { IconButton } from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import SendIcon from "@material-ui/icons/Send";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider, useTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStylesa = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  roote: {
    display: "flex",
    flexDirection: "row",
    width: "86%",
    padding: "30px",
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const useStylesb = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  roote: {
    display: "flex",
    flexDirection: "column",
    width: "86%",
    padding: "30px",
  },
  rootc: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const useStylesc = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  roote: {
    display: "flex",
    flexDirection: "column",
    width: "86%",
    padding: "30px",
  },
  rootc: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
}));

const PersonPart = () => {
  const theme = useTheme();
  const classa = useStylesa();
  const classb = useStylesb();
  const classc = useStylesc();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const anotherMatches = useMediaQuery(theme.breakpoints.up("sm"));

  if (matches) {
    let classes = classa;
    return (
      <div className={classes.root}>
        <Paper className={classes.roote}>
          <div>
            <Avatar
              className={classes.large}
              src={Default}
              alt="default user"
            ></Avatar>
            <article style={{ marginTop: "10px", maxWidth: "100px" }}>
              <Typography
                noWrap="true"
                variant="h6"
                display="block"
                gutterBottom
              >
                Mansaah Musa
              </Typography>
            </article>
          </div>
          <div style={{ alignSelf: "center", marginLeft: "30px" }}>
            <Typography variant="h3" display="inline" gutterBottom>
              99000
            </Typography>
            <Typography
              variant="h6"
              display="inline"
              gutterBottom
              style={{ color: "#C91558", marginLeft: "2px" }}
            >
              NGC
            </Typography>
          </div>
          <div style={{ alignSelf: "flex-end", marginLeft: "auto" }}>
            <ConnectWallet
              Icon={AccountBalanceWalletIcon}
              buttonText={"connect"}
            />
          </div>
          <div style={{ alignSelf: "flex-end" }}>
            <SendTransaction Icon={SendIcon} buttonText={"send"} />
          </div>
          <div style={{ alignSelf: "flex-start" }}>
            <IconButton aria-label="copy text" component="span" size="medium">
              <FileCopyOutlinedIcon />
            </IconButton>
          </div>
        </Paper>
      </div>
    );
  } else {
    if (!anotherMatches) {
      let classes = classb;
      return (
        <div className={classes.root}>
          <Paper className={classes.roote}>
            <div className={classes.root}>
              <div>
                <Avatar
                  className={classes.large}
                  src={Default}
                  alt="default user"
                ></Avatar>
                <article style={{ marginTop: "10px", maxWidth: "100px" }}>
                  <Typography
                    noWrap="true"
                    variant="h6"
                    display="block"
                    gutterBottom
                  >
                    Mansaah Musa
                  </Typography>
                </article>
              </div>
              <div style={{ alignSelf: "center", marginLeft: "30px" }}>
                <Typography variant="h4" display="inline" gutterBottom>
                  99000
                </Typography>
                <Typography
                  variant="button"
                  display="inline"
                  gutterBottom
                  style={{ color: "#C91558", marginLeft: "2px" }}
                >
                  NGC
                </Typography>
              </div>

              <div style={{ alignSelf: "flex-start" }}>
                <IconButton
                  aria-label="copy text"
                  component="span"
                  size="medium"
                >
                  <FileCopyOutlinedIcon />
                </IconButton>
              </div>
            </div>
            <div className={classes.rootc}>
              <div style={{ alignSelf: "flex-end", marginLeft: "auto" }}>
                <ConnectWallet
                  Icon={AccountBalanceWalletIcon}
                  buttonText={"connect"}
                />
              </div>
              <div style={{ alignSelf: "flex-end" }}>
                <SendTransaction Icon={SendIcon} buttonText={"send"} />
              </div>
            </div>
          </Paper>
        </div>
      );
    } else {
      let classes = classc;
      return (
        <div className={classes.root}>
          <Paper className={classes.roote}>
            <div className={classes.root}>
              <div>
                <Avatar
                  className={classes.large}
                  src={Default}
                  alt="default user"
                ></Avatar>
                <article style={{ marginTop: "10px", maxWidth: "100px" }}>
                  <Typography
                    noWrap="true"
                    variant="h6"
                    display="block"
                    gutterBottom
                  >
                    Mansaah Musa
                  </Typography>
                </article>
              </div>
              <div style={{ alignSelf: "center", marginLeft: "30px" }}>
                <Typography variant="h3" display="inline" gutterBottom>
                  99000
                </Typography>
                <Typography
                  variant="h6"
                  display="inline"
                  gutterBottom
                  style={{ color: "#C91558", marginLeft: "2px" }}
                >
                  NGC
                </Typography>
              </div>

              <div style={{ alignSelf: "flex-start", marginLeft: "auto" }}>
                <IconButton
                  aria-label="copy text"
                  component="span"
                  size="medium"
                >
                  <FileCopyOutlinedIcon />
                </IconButton>
              </div>
            </div>
            <div className={classes.rootc}>
              <div style={{ alignSelf: "flex-end", marginLeft: "auto" }}>
                <ConnectWallet
                  Icon={AccountBalanceWalletIcon}
                  buttonText={"connect"}
                />
              </div>
              <div style={{ alignSelf: "flex-end" }}>
                <SendTransaction Icon={SendIcon} buttonText={"send"} />
              </div>
            </div>
          </Paper>
        </div>
      );
    }
  }
};

export default PersonPart;
