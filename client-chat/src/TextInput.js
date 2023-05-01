import React from "react";
import { TextField, IconButton,} from "@mui/material";
import { createStyles, makeStyles, Theme } from "@mui/styles";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
const useStyles = makeStyles((theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      flex: 1,
      justifyContent: "flex-end",
      width: "97%",
    },
    wrapText: {
      width: "97%",
    },
    button: {
    },
  })
);

export const TextInput = () => {
  const classes = useStyles();
  const [change, setChange] = React.useState('')
  const handleChange = (e)=>{
    setChange(e.target.value)
  }
  return (
    <>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          className={classes.wrapText}
          onChange={handleChange}
          placeholder="write message"
          sx={{ width: "100%" }}
          InputProps={{
            startAdornment: (
              <>
                  <IconButton
                    aria-label="upload"
                    component="label" 
                  >
                    <AttachFileIcon />
                    <input
                      hidden
                      type="file"
                    />
                  </IconButton>
              </>
            ),
            endAdornment: (
              <>
                {change !=='' ? 
                  <IconButton
                    aria-label="upload"
                    component="label" 
                  >
                    <SendIcon  color = 'primary'/>
                    <input
                      hidden
                      type="submit"
                    />
                  </IconButton> : null}
              </>
            ),
          }}
        />
      </form>
    </>
  );
};
