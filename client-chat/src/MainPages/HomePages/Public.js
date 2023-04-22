import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Home from "../Home";
import { Avatar } from "@mui/material";
import imageOne from "../../Assets/pexels-ali-pazani-2681751 (1).jpg";
import imageTwo from "../../Assets/pexels-ali-pazani-2681751.jpg";
import imageThree from "../../Assets/pexels-chris-hepworth-16047551.jpg";
import imageFour from "../../Assets/pexels-david-bartus-610294.jpg";
import imageFive from "../../Assets/pexels-esther-huynh-bich-2340876.jpg";
import imageSix from "../../Assets/pexels-pixabay-219569.jpg";
import imageSeven from "../../Assets/pexels-максим-11896928.jpg";
import imageEight from "../../Assets/pexels-pixabay-413885.jpg";
import imageNine from "../../Assets/pexels-mirco-violent-blur-4033244.jpg";
import imageTen from "../../Assets/pexels-pixabay-247298.jpg";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { createStyles, makeStyles, Theme } from "@mui/styles";
import { Paper, Stack } from "@mui/material";
import { TextInput } from "../../TextInput.js";
import { MessageLeft, MessageRight } from "../../Message";

const useStyles = makeStyles((theme) =>
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
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const drawerWidth = 240;
const data = {
  data: [
    {
      image: imageOne,
      title: "User One",
    },
    {
      image: imageTen,
      title: "User Two",
    },
    {
      image: imageThree,
      title: "User Three",
    },
    {
      image: imageFour,
      title: "User Four",
    },
    {
      image: imageFive,
      title: "User Five",
    },
    {
      image: imageSix,
      title: "User Six",
    },
    {
      image: imageSeven,
      title: "User Seven",
    },
    {
      image: imageEight,
      title: "User Eight",
    },
    {
      image: imageOne,
      title: "User One",
    },
    {
      image: imageNine,
      title: "User Two",
    },
    {
      image: imageThree,
      title: "User Three",
    },
    {
      image: imageFour,
      title: "User Four",
    },
    {
      image: imageSeven,
      title: "User Ten",
    },
    {
      image: imageNine,
      title: "User Nine",
    },
    {
      image: imageThree,
      title: "User Eleven",
    },
    {
      image: imageFive,
      title: "User Twelve",
    },
    {
      image: imageEight,
      title: "User Thirteen",
    },
    {
      image: imageOne,
      title: "User FourTeen",
    },
  ],
};
function Public() {
  const classes = useStyles();
  return (
    <div>
      <Home />
      <Stack direction='row' >
        <Stack>
          <CssBaseline />
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List>
                {data.data !==null ?  data.data.map((text, index) => (
                  <ListItem key={text.title} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Stack direction="row" spacing={2}>
                          <StyledBadge
                            overlap="circular"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right",
                            }}
                            variant="dot"
                          >
                            <Avatar alt="User One" src={text.image} />
                          </StyledBadge>
                        </Stack>
                      </ListItemIcon>
                      <ListItemText primary={text.title} />
                    </ListItemButton>
                  </ListItem>
                )):null}
              </List>
              <Divider />
              <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Stack>
        <Stack sx = {{height:'100vh'}}>
            <Paper id="style-1" className={classes.messagesBody} sx = {{height:'100vh'}}>
              <Stack spacing={2} sx = {{marginTop:'100px'}}>
                <Stack >
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
                <Stack sx={{ marginTop: "40px" }}>
                  <TextInput />
                </Stack>
              </Stack>
            </Paper>
        </Stack>
      </Stack>
    </div>
  );
}

export default Public;