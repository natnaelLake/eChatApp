import Diversity1Icon from "@mui/icons-material/Diversity1";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SecurityIcon from "@mui/icons-material/Security";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useAuthControl } from "../Hooks/useAuthControl";
import Channel from "./HomePages/Channel";
import Group from "./HomePages/Group";
import Private from "./HomePages/Private";
import Public from "./HomePages/Public";
import Video from "./HomePages/Video";

import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import imageThree from "../Assets/pexels-chris-hepworth-16047551.jpg";
import imageFour from "../Assets/pexels-david-bartus-610294.jpg";
import imageFive from "../Assets/pexels-esther-huynh-bich-2340876.jpg";
import imageNine from "../Assets/pexels-mirco-violent-blur-4033244.jpg";
import imageSix from "../Assets/pexels-pixabay-219569.jpg";
import imageTen from "../Assets/pexels-pixabay-247298.jpg";
import imageEight from "../Assets/pexels-pixabay-413885.jpg";
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
  const { createGroupChat } = useAuthControl();
  const { getAllUser } = useAuthControl();
  const [state, setState] = React.useState({
    right: false,
  });
  const [channel, setChannel] = React.useState(false);
  const [group, setGroup] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll] = React.useState("paper");
  const [search, setSearch] = React.useState("");
  const [channelName,setChannelName] = React.useState('')
  const [groupName, setGroupName] = React.useState("");
  const [searchData, setSearchData] = React.useState([
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
  ]);
  const [searchError, setSearchError] = React.useState("");

  const handleClose = () => {
    // setOpen(false);
    setGroup(false);
    setChannel(false)
  };
  const handleGroupSubmit = async () => {
    await createGroupChat(personName, groupName);
  };
  const handleChannelSubmit = async ()=>{
    await createGroupChat(personName,channelName)
  }
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

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  console.log(personName);
  console.log("group name is :", channelName);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleSetting = () => {
    navigate("/settings");
  };
  const handleLogout = async () => {
    await logout();
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // await getAllUser()
    if (search === "") {
      setSearchError("Please Insert Something");
      return;
    }
    try {
      // const headerData = {
      //   header:{
      //     Authorization: `Bearer ${user.token}`
      //   }
      // }
      const { data } = await axios.get(
        `https://web-chat-app-backend-30r0.onrender.com/search?search=${e.target.value}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSearchData(data);
    } catch (error) {
      setSearchError(error);
    }
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <form noValidate autoComplete="off">
              <TextField
                id="standard-text"
                onChange={(e) => handleSearch(e)}
                placeholder="Search User"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  width: "100%",
                  bgcolor: "whitesmoke",
                  borderRadius: "10px",
                }}
                InputProps={{
                  endAdornment: (
                    <>
                      {
                        <IconButton
                          aria-label="upload"
                          component="label"
                          onClick={(e) => handleSearch(e)}
                        >
                          <SearchIcon color="secondary" />
                          <input hidden type="submit" />
                        </IconButton>
                      }
                    </>
                  ),
                }}
              />
            </form>
            <Typography>{searchError}</Typography>

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
                    onChange={(newValue) => {
                      setActive(newValue);
                    }}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant={"scrollable"}
                    scrollButtons="auto"
                    orientation="vertical"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {navTabs.map((navbars, index) => (
                      <Tab
                        sx={{ textTransform: "capitalize" }}
                        key={index}
                        label={navbars}
                        value={navbars}
                      />
                    ))}
                  </Tabs>
                }
              </Menu>
            </Box>
            <form noValidate autoComplete="off">
              <TextField
                id="standard-text"
                onChange={handleChange}
                placeholder="Search User"
                sx={{
                  width: "90%",
                  bgcolor: "whitesmoke",
                  borderRadius: "10px",
                  mr: 10,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
                InputProps={{
                  endAdornment: (
                    <>
                      {
                        <IconButton aria-label="upload" component="label">
                          <SearchIcon color="secondary" />
                          <input hidden type="submit" />
                        </IconButton>
                      }
                    </>
                  ),
                }}
              />
            </form>
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
                  <Tab
                    sx={{ textTransform: "capitalize" }}
                    key={index}
                    label={city}
                    value={city}
                  />
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
                <DialogTitle align = 'center' id="scroll-dialog-title">
                  Create Channel
                </DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                  <Box
                    sx={{
                      marginTop:0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* <Typography component="h1" variant="h5">
                      Sign Up
                    </Typography> */}
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        onChange={(e) => setChannelName(e.target.value)}
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
                            <MenuItem key={name} value={name}>
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
                  <Button variant="contained" onClick={handleChannelSubmit}>
                    Create
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
                <DialogTitle id="scroll-dialog-title" align = 'center'>Create New Group</DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* <Typography component="h1" variant="h5">
                      Create Group
                    </Typography> */}
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        onChange={(e) => setGroupName(e.target.value)}
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
                            <MenuItem key={name} value={name}>
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
                  <Button variant="contained" onClick={handleGroupSubmit}>
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
            <Channel userData={searchData} />
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
