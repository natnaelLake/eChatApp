import React from "react";
import TextField from "@mui/material/TextField";
import { createStyles, makeStyles, Theme } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      flex: 1,
      justifyContent: "flex-end",
      width: "100%",
      // margin: `20px auto`,
      // marginTop: "50px",
    },
    wrapText: {
      width: "100%",
    },
    button: {
      //margin: theme.spacing(1),
    },
  })
);

export const TextInput = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="Write  Message"
          className={classes.wrapText}
          //margin="normal"
          sx={{width:'100%'}}
        />
        <Button variant="contained" color="primary" className={classes.button} spacing = {1}>
          <SendIcon />
        </Button>
      </form>
    </>
  );
};
