import { React, useState } from "react";
import { createStyles, makeStyles, Theme } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "material-ui/colors";
// let  pub = false;
const useStyles = makeStyles((theme) =>
  createStyles({
    messageRow: {
      display: "flex",
    },
    messageRowRight: {
      display: "flex",
      justifyContent: "flex-end",
    },
    messageBlue: {
      position: "relative",
      marginLeft: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#A8DDFD",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #97C6E3",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #A8DDFD",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #97C6E3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px",
      },
    },
    messageOrange: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#f8e896",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #dfd087",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderBottom: "15px solid #f8e896",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        bottom: "0",
        right: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderBottom: "17px solid #dfd087",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        bottom: "-1px",
        right: "-17px",
      },
    },

    messageContent: {
      padding: 0,
      margin: "4px",
    },
    messageTimeStampRight: {
      position: "absolute",
      fontSize: ".85em",
      fontWeight: "300",
      marginTop: "15px",
      bottom: "-15px",
      right: "5px",
    },

    orange: {
      color: "primary",
      backgroundColor: deepOrange[500],
      width: "100px",
      height: "100px",
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
      width: "100px",
      height: "100px",
    },
    displayName: {
      marginLeft: "20px",
    },
  })
);

export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "";
  const displayName = props.displayName ? props.displayName : "User Name";
  const classes = useStyles();
  let pub = true;
  const [publicMessage, setPublicMessage] = useState(pub);
  // const [group,setPublic] = useState(false)
  // const [public,setPublic] = useState(false)
  // const [public,setPublic] = useState(false)

  return (
    <>
      {
        publicMessage ? (<div className={classes.messageRow} >
          <Avatar
            alt={displayName}
            // className={classes.orange}
            src={photoURL}
          ></Avatar>
          <div>
            <div className={classes.displayName}>{displayName}</div>
            <div className={classes.messageBlue}>
              <div>
                <p className={classes.messageContent}>{message}</p>
                <div className={classes.messageTimeStampRight}>{timestamp}</div>
              </div>
            </div>
          </div>
        </div>):<div className={classes.messageRow}>
        <div>
          <div className={classes.displayName}>{displayName}</div>
          <div className={classes.messageBlue}>
            <div>
              <p className={classes.messageContent}>{message}</p>
              <div className={classes.messageTimeStampRight}>{timestamp}</div>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
};
export const MessageRight = (props) => {
  const classes = useStyles();
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  let pub = false;
  const [publicMessage, setPublicMessage] = useState(pub);
  return (
    <div>
      {publicMessage ? null : (
        <div className={classes.messageRowRight}>
          <div className={classes.messageOrange}>
            <p className={classes.messageContent}>{message}</p>
            <div className={classes.messageTimeStampRight}>{timestamp}</div>
          </div>
        </div>
      )}
    </div>
  );
};
