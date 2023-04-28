import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";
import imageOne from "../Assets/pexels-ali-pazani-2681751 (1).jpg";
import imageTwo from "../Assets/pexels-ali-pazani-2681751.jpg";
import imageThree from "../Assets/pexels-chris-hepworth-16047551.jpg";
import imageFour from "../Assets/pexels-david-bartus-610294.jpg";
import imageFive from "../Assets/pexels-esther-huynh-bich-2340876.jpg";
import imageSix from "../Assets/pexels-pixabay-219569.jpg";
import imageSeven from "../Assets/pexels-максим-11896928.jpg";
import imageEight from "../Assets/pexels-pixabay-413885.jpg";
import imageNine from "../Assets/pexels-mirco-violent-blur-4033244.jpg";
import imageTen from "../Assets/pexels-pixabay-247298.jpg";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import {
  Tabs,
  Tab,
  Stack,
  TextField,
  CssBaseline,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Group from "./HomePages/Group";
import Channel from "./HomePages/Channel";
import Public from "./HomePages/Public";
import Private from "./HomePages/Private";
import Video from "./HomePages/Video";
import { useAuth } from "../Hooks/useAuth";
import { useAuthControl } from "../Hooks/useAuthControl";
import { useNavigate } from "react-router-dom";
import { Form, Modal } from "react-bootstrap";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";


import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
// const pages = ["Products", "Pricing", "Blog"];
// const settings = [
//   "Create Channel",
//   "Create Group",
//   "Manage Profile",
//   "Privacy and Security",
//   "Logout",
// ];

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});
const navTabs = ["Channels", "Groups", "Public", "Private", "Video"];
function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [active, setActive] = React.useState(navTabs[0]);
  const classes = useTabStyles();
  const { user } = useAuth();
  const [state, setState] = React.useState({
    right: false,
  });
  const [channel, setChannel] = React.useState(false);
  const [group, setGroup] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const handleChannel = () => {
    setChannel(true);
    setGroup(false);
  };
  const handleGroup = () => {
    setChannel(false);
    setGroup(true);
  };
  const navigate = useNavigate();
  const { logout } = useAuthControl();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleSetting = () => {
    navigate('/settings')
  };
  const handleLogout = async () => {
    await logout();
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {
                  <Tabs
                    classes={{ root: classes.root, scroller: classes.scroller }}
                    value={active}
                    onChange={(event, newValue) => {
                      setActive(newValue);
                    }}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant={"scrollable"}
                    scrollButtons="auto"
                    orientation="vertical"
                  >
                    {navTabs.map((city, index) => (
                      <Tab key={index} label={city} value={city} />
                    ))}
                  </Tabs>
                }
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Tabs
                classes={{ root: classes.root, scroller: classes.scroller }}
                value={active}
                onChange={(event, newValue) => {
                  setActive(newValue);
                }}
                indicatorColor="secondary"
                textColor="inherit"
                variant={"scrollable"}
                scrollButtons="auto"
              >
                {navTabs.map((city, index) => (
                  <Tab key={index} label={city} value={city} />
                ))}
              </Tabs>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Stack spacing={1} direction="row">
                <Stack spacing={1} direction="row">
                  <Typography sx={{ paddingTop: 2 }}>
                    {user.user.firstName}&nbsp;&nbsp;{user.user.lastName}
                  </Typography>
                </Stack>
                <Stack>
                  <Tooltip title="Open settings">
                    <IconButton
                      onClick={toggleDrawer("right", true)}
                      sx={{ p: 0 }}
                    >
                      <Avatar alt={user.user.firstName} src={user.user.pic} />
                    </IconButton>
                  </Tooltip>
                </Stack>
                <Drawer
                  anchor="right"
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  <Box
                    role="presentation"
                    onClick={toggleDrawer("right", false)}
                    onKeyDown={toggleDrawer("right", false)}
                  >
                    <List sx={{ marginTop: "50px" }}>
                      <ListItem key={1} onClick={handleChannel}>
                        <ListItemButton>
                          <ListItemIcon>
                            <Diversity1Icon />
                          </ListItemIcon>
                          <ListItemText primary={"Creat Channel"} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem key={2} onClick={handleGroup}>
                        <ListItemButton>
                          <ListItemIcon>
                            <GroupsIcon />
                          </ListItemIcon>
                          <ListItemText primary={"Create Group"} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem key={2} onClick={handleSetting}>
                        <ListItemButton>
                          <ListItemIcon>
                            <ManageAccountsIcon />
                          </ListItemIcon>
                          <ListItemText primary={"Manage Profile"} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem key={3} onClick={handleChannel}>
                        <ListItemButton>
                          <ListItemIcon>
                            <SecurityIcon />
                          </ListItemIcon>
                          <ListItemText primary={"Security And Privacy"} />
                        </ListItemButton>
                      </ListItem>
                      <ListItem key={4} onClick={handleLogout}>
                        <ListItemButton>
                          <ListItemIcon>
                            <LogoutIcon />
                          </ListItemIcon>
                          <ListItemText primary={"Logout"} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Box>
                </Drawer>
              </Stack>
              <Dialog
                open={channel}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
              >
                <DialogTitle id="scroll-dialog-title">
                  Create Channel
                </DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                  
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    
                    <Typography component="h1" variant="h5">
                      Sign Up
                    </Typography>
                    <Box
                      component="form"
                      
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="text"
                        id="ChannelName"
                        label="Type Channel Name"
                        name="firstname"
                        autoComplete="text"
                        
                        autoFocus
                      />
                      <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-chip-label">
                          Members
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="demo-multiple-chip"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="Chip"
                            />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
                              {selected.map((value) => (
                                <Chip key={value} label={value} />
                              ))}
                            </Box>
                          )}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <Box textAlign="center">
                        <Button
                          variant="outlined"
                          color="secondary"
                          type="submit"
                        >
                          Register
                        </Button>
                      </Box>
                      
                    </Box>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button variant="contained" onClick={handleClose}>
                    Subscribe
                  </Button>
                </DialogActions>
              </Dialog>
              <Dialog
                open={group}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
              >
                <DialogTitle id="scroll-dialog-title">
                  New Group
                </DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                  
                  <Box
                    sx={{
                      
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    
                    <Typography component="h1" variant="h5">
                      Create Group
                    </Typography>
                    <Box
                      component="form"
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="text"
                        id="ChannelName"
                        label="Type Channel Name"
                        name="firstname"
                        autoComplete="text"
                        autoFocus
                      />
                      <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-chip-label">
                          Members
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="demo-multiple-chip"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="Chip"
                            />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
                              {selected.map((value) => (
                                <Chip key={value} label={value} />
                              ))}
                            </Box>
                          )}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      
                    </Box>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button variant="contained" onClick={handleClose}>
                    Create
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ margin: 10 }}>
        {active === "Channels" && (
          <Box>
            <Channel />
          </Box>
        )}
        {active === "Groups" && (
          <Box>
            <Group />
          </Box>
        )}
        {active === "Public" && (
          <Box>
            <Public />
          </Box>
        )}
        {active === "Private" && (
          <Box>
            <Private />
          </Box>
        )}
        {active === "Video" && (
          <Box>
            <Video />
          </Box>
        )}
      </Box>
    </>
  );
}
export default Home;
