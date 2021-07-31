import React from "react";
import { Typography } from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { IconButton } from "@material-ui/core";
import CallMissedOutgoingIcon from "@material-ui/icons/CallMissedOutgoing";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

const TranscationItem = ({ name, amount, public_key, sent, received }) => {
  let personName = name || "no name";
  let transactionAmount = amount || "nothing here";
  let publicKey = public_key || "";
  let isSent = sent || false;
  let isReceived = received || false;

  if (isSent) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          borderBottom: "1px",
        }}
      >
        <div style={{ maxWidth: 120, width: 120 }}>
          <Typography variant="subtitle1" noWrap="true" gutterBottom>
            {personName}
          </Typography>
        </div>
        <div style={{ maxWidth: 120, marginLeft: "auto" }}>
          <Typography variant="button" noWrap="true" gutterBottom>
            {transactionAmount}
          </Typography>
        </div>
        <div style={{ maxWidth: 140, marginLeft: "2px" }}>
          <Typography
            variant="subtitle2"
            display="inline"
            gutterBottom
            style={{ color: "#C91558", marginLeft: "2px" }}
          >
            NGC
          </Typography>
        </div>
        <div style={{ color: "#0096FF", marginLeft: "auto" }}>
          <CallMadeIcon fontSize="small" />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <label htmlFor="icon-button-file">
            <IconButton aria-label="copy text" component="span" size="small">
              <FileCopyOutlinedIcon fontSize="small" />
            </IconButton>
          </label>
        </div>
      </div>
    );
  } else {
    if (isReceived) {
      return (
        <div
          style={{
            display: "flex",
            width: "100%",
            borderBottom: "1px",
          }}
        >
          <div style={{ maxWidth: 120, width: 120 }}>
            <Typography variant="subtitle1" noWrap="true" gutterBottom>
              {personName}
            </Typography>
          </div>
          <div style={{ maxWidth: 120, marginLeft: "auto" }}>
            <Typography variant="button" noWrap="true" gutterBottom>
              {transactionAmount}
            </Typography>
          </div>
          <div style={{ maxWidth: 140, marginLeft: "2px" }}>
            <Typography
              variant="subtitle2"
              display="inline"
              gutterBottom
              style={{ color: "#C91558", marginLeft: "2px" }}
            >
              NGC
            </Typography>
          </div>
          <div style={{ color: "#059862 ", marginLeft: "auto" }}>
            <CallReceivedIcon fontSize="small" />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <label htmlFor="icon-button-file">
              <IconButton aria-label="copy text" component="span" size="small">
                <FileCopyOutlinedIcon fontSize="small" />
              </IconButton>
            </label>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            width: "100%",
            borderBottom: "1px",
          }}
        >
          <div style={{ maxWidth: 120, width: 120 }}>
            <Typography variant="subtitle1" noWrap="true" gutterBottom>
              {personName}
            </Typography>
          </div>
          <div style={{ maxWidth: 120, marginLeft: "auto" }}>
            <Typography variant="button" noWrap="true" gutterBottom>
              {transactionAmount}
            </Typography>
          </div>
          <div style={{ maxWidth: 140, marginLeft: "2px" }}>
            <Typography
              variant="subtitle2"
              display="inline"
              gutterBottom
              style={{ color: "#C91558", marginLeft: "2px" }}
            >
              NGC
            </Typography>
          </div>
          <div style={{ color: "#FBBC04", marginLeft: "auto" }}>
            <CallMissedOutgoingIcon fontSize="small" />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <label htmlFor="icon-button-file">
              <IconButton aria-label="copy text" component="span" size="small">
                <FileCopyOutlinedIcon fontSize="small" />
              </IconButton>
            </label>
          </div>
        </div>
      );
    }
  }
};

export default TranscationItem;
