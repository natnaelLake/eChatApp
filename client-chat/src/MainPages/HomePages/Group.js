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
import { Avatar, Tab, Tabs } from "@mui/material";
import Home from "../Home";
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
import { useAuth } from "../../Hooks/useAuth";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "100%",
      height: "100%",
      // maxWidth: "500px",
      // maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    paper2: {
      width: "100%",
      // maxWidth: "500px",
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
      width: "calc( 100% )",
      // margin: 10,
      overflowY: "scroll",
      height: "calc( 100% )",
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

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
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
function Group() {
  const classes = useStyles();
  const [active, setActive] = React.useState("");
  const {user} = useAuth()
  return (
    <div>
      {/* <Home /> */}
      <Stack direction='row' >
        <Stack sx ={{width:'20%'}}>
          <CssBaseline />
          <Drawer
            variant="permanent"
            sx={{
              width: '20%',
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: '20%',
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}> 
              <List>
                {data.data !==null ?  data.data.map((text, index) => (
                  <ListItem key={index} disablePadding>
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
                      <ListItemText primary={text.title} secondary = 'welcome welcome '/>
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
        <Stack sx = {{height: "76vh",width:'100%' }} >
            <Stack id="style-1" className={classes.messagesBody} >
              <Stack spacing={2} sx = {{margin:'10px'}}>
                <Stack  justifyContent="center" spacing = {2}>
                   <MessageLeft
                    message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias minus dolorum, fugit culpa dolore sint reprehenderit provident ipsa eius at nihil quos! Obcaecati eius esse sed ratione non quidem!"
                    timestamp="MM/DD 00:00"
                    photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                    displayName=""
                    avatarDisp={true}
                  />
                  <MessageLeft
                    message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias minus dolorum, fugit culpa dolore sint reprehenderit provident ipsa eius at nihil quos! Obcaecati eius esse sed ratione non quidem!"
                    timestamp="MM/DD 00:00"
                    photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                    displayName="Use One"
                    avatarDisp={true}
                  />
                  <MessageLeft
                    message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias minus dolorum, fugit culpa dolore sint reprehenderit provident ipsa eius at nihil quos! Obcaecati eius esse sed ratione non quidem!"
                    timestamp="MM/DD 00:00"
                    photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                    displayName=""
                    avatarDisp={true}
                  />
                  <MessageLeft
                    message="welcome to nodejs"
                    timestamp="MM/DD 00:00"
                    photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                    displayName="Use One"
                    avatarDisp={true}
                  />
                  <MessageLeft
                    message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias minus dolorum, fugit culpa dolore sint reprehenderit provident ipsa eius at nihil quos! Obcaecati eius esse sed ratione non quidem!"
                    timestamp="MM/DD 00:00"
                    photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                    displayName=""
                    avatarDisp={true}
                  />
                  <MessageLeft
                    message="welcome to nodejs"
                    timestamp="MM/DD 00:00"
                    photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                    displayName="Use One"
                    avatarDisp={true}
                  />
                  <MessageRight
                    message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias minus dolorum, fugit culpa dolore sint reprehenderit provident ipsa eius at nihil quos! Obcaecati eius esse sed ratione non quidem!"
                    timestamp="MM/DD 00:00"
                    photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                    displayName=""
                    avatarDisp={true}
                  />
                  <MessageRight
                    message="welcome to nodejs"
                    timestamp="MM/DD 00:00"
                    photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                    displayName="Use One"
                    avatarDisp={true}
                  />
                  <MessageRight
                    message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias minus dolorum, fugit culpa dolore sint reprehenderit provident ipsa eius at nihil quos! Obcaecati eius esse sed ratione non quidem!"
                    timestamp="MM/DD 00:00"
                    photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                    displayName=""
                    avatarDisp={true}
                  />
                  <MessageRight
                    message="welcome to nodejs"
                    timestamp="MM/DD 00:00"
                    photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                    displayName="Use One"
                    avatarDisp={true}
                  /> 
                </Stack>
              </Stack>
            </Stack>
                <Stack sx = {{}}>
                  <TextInput />
                </Stack>
        </Stack>
      </Stack> 
    </div>
  );
}

export default Group;
