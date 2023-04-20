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
import imageOne from '../../Assets/pexels-ali-pazani-2681751 (1).jpg'
import imageTwo from '../../Assets/pexels-ali-pazani-2681751.jpg'
import imageThree from '../../Assets/pexels-chris-hepworth-16047551.jpg'
import imageFour from '../../Assets/pexels-david-bartus-610294.jpg'
import imageFive from '../../Assets/pexels-esther-huynh-bich-2340876.jpg'
import imageSix from '../../Assets/pexels-pixabay-219569.jpg'
import imageSeven from '../../Assets/pexels-максим-11896928.jpg'
import imageEight from '../../Assets/pexels-pixabay-413885.jpg'
import imageNine from '../../Assets/pexels-mirco-violent-blur-4033244.jpg'
import imageTen from '../../Assets/pexels-pixabay-247298.jpg'
import Chat from "../../Chats/Chat";

const drawerWidth = 240;
const data = {data:[
    {
        image:imageOne,
        title:'User One'
    },
    {
        image:imageTen,
        title:'User Two'
    },
    {
        image:imageThree,
        title:'User Three'
    },
    {
        image:imageFour,
        title:'User Four'
    },
    {
        image:imageFive,
        title:'User Five'
    },
    {
        image:imageSix,
        title:'User Six'
    },
    {
        image:imageSeven,
        title:'User Seven'
    },
    {
        image:imageEight,
        title:'User Eight'
    },
    {
        image:imageOne,
        title:'User One'
    },
    {
        image:imageNine,
        title:'User Two'
    },
    {
        image:imageThree,
        title:'User Three'
    },
    {
        image:imageFour,
        title:'User Four'
    },
    {
        image:imageSeven,
        title:'User Ten'
    },
    {
        image:imageNine,
        title:'User Nine'
    },
    {
        image:imageThree,
        title:'User Eleven'
    },
    {
        image:imageFive,
        title:'User Twelve'
    },
    {
        image:imageEight,
        title:'User Thirteen'
    },
    {
        image:imageOne,
        title:'User FourTeen'
    },
]}

function Private() {
  return (
    <div>
        {/* <Home/> */}
      <Box sx={{ display: "flex" }}>
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
              {data.data.map((text, index) => (
                <ListItem key={text.title} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <Avatar alt="Remy Sharp" src={text.image} />

                    </ListItemIcon>
                    <ListItemText primary={text.title} />
                  </ListItemButton>
                </ListItem>
              ))}
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} bgcolor="success.main" color = 'white'>
          <Toolbar />
          <Typography variant = 'h2' textAlign = 'center' color = 'secondary'>Private Page</Typography>
          <Chat/>
        </Box>
      </Box>
    </div>
  );
}

export default Private;
