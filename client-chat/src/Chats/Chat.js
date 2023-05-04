import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Paper, Stack } from "@mui/material";
import { TextInput } from "../TextInput.js";
import { MessageLeft, MessageRight } from "../Message";

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )",
    },
  })
);

export default function Chat() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <Paper className={classes.paper} zDepth={2}> */}
      <Paper id="style-1" className={classes.messagesBody}>
        <Stack spacing={2}>
          <Stack sx={{ width: "500px" }}>
            <MessageLeft
              message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias minus dolorum, fugit culpa dolore sint reprehenderit provident ipsa eius at nihil quos! Obcaecati eius esse sed ratione non quidem!"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName=""
              avatarDisp={true}
              sx={{ width: "300px" }}
            />
            <MessageLeft
              message="welcome to nodejs"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="Use One"
              avatarDisp={true}
            />
          </Stack>
          <Stack
            justifyContent="end"
            sx={{ display: "flex", float: "right" }}
            align="right"
            className="rightStack"
          >
            <MessageRight
              message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias minus dolorum, fugit culpa dolore sint reprehenderit provident ipsa eius at nihil quos! Obcaecati eius esse sed ratione non quidem!"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="User Two"
              avatarDisp={true}
            />
            <MessageRight
              message="Welcome to MongoDb"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="User Three"
              avatarDisp={true}
            />
          </Stack>
          <Stack sx={{marginTop:'40px'}}>
            <TextInput />
          </Stack>
        </Stack>
      </Paper>
      {/* </Paper> */}
    </div>
  );
}
