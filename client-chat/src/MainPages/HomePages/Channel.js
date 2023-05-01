import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";
import imageOne from "../../Assets/pexels-ali-pazani-2681751 (1).jpg";
import imageThree from "../../Assets/pexels-chris-hepworth-16047551.jpg";
import imageFour from "../../Assets/pexels-david-bartus-610294.jpg";
import imageFive from "../../Assets/pexels-esther-huynh-bich-2340876.jpg";
import imageNine from "../../Assets/pexels-mirco-violent-blur-4033244.jpg";
import imageSix from "../../Assets/pexels-pixabay-219569.jpg";
import imageTen from "../../Assets/pexels-pixabay-247298.jpg";
import imageEight from "../../Assets/pexels-pixabay-413885.jpg";
import imageSeven from "../../Assets/pexels-максим-11896928.jpg";
import { MessageLeft, MessageRight } from "../../Message";
import { TextInput } from "../../TextInput.js";
import PhoneIcon from '@mui/icons-material/Phone';
import AddIcon from '@mui/icons-material/Add';
// import {capitalize} from '@mui/material/utils'
const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    paper2: {
      width: "100%",
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

function Channel() {
  const classes = useStyles();
  const [display, setDisplay] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  // const [setSelectedData] = React.useState({});
  const [openProfile, setOpenProfile] = React.useState(false);
  const [scroll] = React.useState("paper");
  const handleClose = () => {
    setOpenProfile(false);
  };
  const handleSelect = (data) => {
    // setSelectedData(data);
    setSelected(true);
  };
  const handleProfile = () => {
    setOpenProfile(true);
  };
  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <Stack direction="row">
        <Stack sx={{ width: "20%" }}>
          <CssBaseline />
          <Drawer
            variant="permanent"
            sx={{
              width: "20%",
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: "20%",
                boxSizing: "border-box",
              },
              container_with_scrolls:{
                overflowX:'scroll',
                '&::-webkit-scrollbar':{
                    width:0,
                }
            }
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List>
                {data.data !== null
                  ? data.data.map((text, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => handleSelect(text)}>
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
                          <ListItemText
                            primary={text.title}
                            secondary="welcome welcome "
                          />
                        </ListItemButton>
                      </ListItem>
                    ))
                  : null}
              </List>
              <Divider />
              <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton onClick={() => handleSelect(text)}>
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
        <Stack sx={{ height: "76vh", width: "100%" }}>
          <Stack sx={{}}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDisplay}
                    sx={{ mr: 2 }}
                  >
                    <VerticalSplitIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    align="center"
                  >
                    Bewuketu Lake
                  </Typography>
                  <IconButton onClick={handleProfile} sx={{ p: 0 }}>
                    <Avatar alt="Bewuketu Lake" src={imageEight} />
                  </IconButton>
                </Toolbar>
              </AppBar>
            </Box>
          </Stack>
          <Dialog
            open={openProfile}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title" align="center">
              Bewuketu Lake
            </DialogTitle>
            <DialogContent dividers={scroll === "paper"}>
              <Box
                sx={{
                  marginTop: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{ width: "60%", height: "60%" }}
                  variant="square"
                  src={imageEight}
                />

                <Typography component="h1" variant="h5" p={3}>
                  Biography
                </Typography>
                <Paper>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veritatis dolore quos ex, maiores similique architecto
                    officia debitis consequuntur, iure doloremque rerum at
                    tenetur excepturi. Provident modi iste iure excepturi aut.
                  </Typography>
                </Paper>
                <Typography component="h1" variant="h5" p={3}>
                  Additional Info:
                </Typography>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <PhoneIcon
                    sx={{ color: "primary.main", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    defaultValue="09 34 62 77 08"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </Box>
                <br />
                <TextField
                  id="filled-read-only-input"
                  defaultValue="Hello World"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="filled"
                />
                <Box component="form" noValidate sx={{ mt: 1 }}></Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="error" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          <Stack id="style-1" className={classes.messagesBody}>
            {selected === false ? (
              <Typography
                align="center"
                color="grey"
                sx={{ marginTop: "200px" }}
              >
                Select Chat User to start Message Exchange{" "}
              </Typography>
            ) : (
              <Stack spacing={2} sx={{ margin: "10px" }}>
                <Stack justifyContent="center" spacing={2}>
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
            )}
          </Stack>
          <Stack sx={{}}>
            <TextInput />
          </Stack>
        </Stack>
        {display === true ? (
          <Stack sx={{ width: "20%" }}>
            <CssBaseline />
            <Drawer
              variant="permanent"
              sx={{
                width: "20%",
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: "20%",
                  boxSizing: "border-box",
                },
                overflowX:'hidden'
              }}
              anchor="right"
            >
              <Toolbar />
              <Box sx={{ overflow: "auto",marginTop:'10px' }}>
              <Avatar
                  sx={{ width: "100%", height: "60%" }}
                  variant="square"
                  src={imageEight}
                />
                <IconButton>
                  <Button startIcon = {<AddIcon/>} sx={{textTransform:'capitalize'}} >Add Member</Button>
                </IconButton>
                <hr />
                <List>
                  {data.data !== null
                    ? data.data.map((text, index) => (
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
                            <ListItemText
                              primary={text.title}
                              secondary="welcome welcome "
                            />
                          </ListItemButton>
                        </ListItem>
                      ))
                    : null}
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
        ) : null}
      </Stack>
    </div>
  );
}

export default Channel;
