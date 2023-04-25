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
import { Tabs, Tab, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Group from "./HomePages/Group";
import Channel from "./HomePages/Channel";
import Public from "./HomePages/Public";
import Private from "./HomePages/Private";
import Video from "./HomePages/Video";
import { useAuth } from "../Hooks/useAuth";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [clicked, setClicked] = React.useState(true);
  const [active, setActive] = React.useState(navTabs[0]);
  const classes = useTabStyles();
  const { user } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOnclick = () => {
    setClicked(!clicked);
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
                    scrollButtons='auto'
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
                scrollButtons='auto'
              >
                {navTabs.map((city, index) => (
                  <Tab key={index} label={city} value={city} />
                ))}
              </Tabs>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Stack spacing={1} direction = 'row'>
                <Stack spacing = {1} direction = 'row'>
                  <Typography sx = {{paddingTop:2}} >{user.user.firstName}&nbsp;&nbsp;{user.user.lastName}</Typography>
                  {/* <Typography sx = {{paddingTop:2}} ></Typography> */}
                </Stack>
                <Stack>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt={user.user.firstName} src={user.user.pic} />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
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
