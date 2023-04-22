import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

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


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [clicked, setClicked] = React.useState(true);


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
  const handleOnclick = ()=>{
    setClicked(!clicked)
  }

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> 
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:"center"}}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,':hover': {
                  bgcolor: 'primary.main', // theme.palette.primary.main
                  color: 'white',
                },
                ':active': {
                  bgcolor: 'secondary.main', // theme.palette.primary.main
                  color: 'white',
                
              }}}
              
                href = '/channel'
                // '&:hover'=
              >
                Channels
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,':hover': {
                  bgcolor: 'primary.main', // theme.palette.primary.main
                  color: 'white',
                },
                
              }}
              itemsAlign = 'center'
                href = '/group'
                // '&:hover'=
              >
                Groups
              </Button><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,':hover': {
                  bgcolor: 'primary.main', // theme.palette.primary.main
                  color: 'white',
                },
                
              }}
              itemsAlign = 'center'
                href = '/private'
                // '&:hover'=
              >
                Private
              </Button><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,':hover': {
                  bgcolor: 'primary.main', // theme.palette.primary.main
                  color: 'white',
                },
                
              }}
              itemsAlign = 'center'
                href = '/public'
                // '&:hover'=
              >
                Public
              </Button><Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' ,':hover': {
                  bgcolor: 'primary.main', // theme.palette.primary.main
                  color: 'white',
                },
                
              }}
              itemsAlign = 'center'
                href = '/video'
                // '&:hover'=
              >
                Videos
              </Button>
              
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={imageOne} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
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
  );
}
export default Home;