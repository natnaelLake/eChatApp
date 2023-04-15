import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import Channel from "./HomePages/Channel";
import Group from "./HomePages/Group";
import Private from "./HomePages/Private";
import Setting from "./HomePages/Setting";
import Video from "./HomePages/Video";
import Public from "./HomePages/Public";
import GroupsIcon from '@mui/icons-material/Groups';
import ContactsIcon from '@mui/icons-material/Contacts';
import DeckIcon from '@mui/icons-material/Deck';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PublicIcon from '@mui/icons-material/Public';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SettingsIcon from '@mui/icons-material/Settings';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Home() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div>
      <Box sx={{ bgcolor: "background.paper", width: 500, display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,justifyContent :'center',textAlign: 'center' }}
        >
          <CssBaseline />
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
             // aria-label="scrollable force tabs example"
            indicatorColor="secondary"
            textColor="light"
            aria-label="nav tabs example"
            centered
          >
            <Tab icon = {<PublicIcon/>} label="Channels" {...a11yProps(0)} />
            <Tab icon = {<GroupsIcon/>} label="Groups" {...a11yProps(1)} />
            <Tab icon = {<PersonPinIcon/>}label="Private" {...a11yProps(2)} />
            <Tab icon = {<DeckIcon/>} label="Public" {...a11yProps(3)} />
            <Tab icon = {<VideoLibraryIcon/>} label="Videos" {...a11yProps(4)} />
            <Tab icon = {<SettingsIcon/>}label="Setting" {...a11yProps(5)} />
          </Tabs>
        </AppBar>
        
      </Box>
      {value === 0 && (
        <Box sx={{ marginTop:'80px' }}>
          <Channel/>
        </Box>
      )}
      {value === 1 && (
        <Box sx={{ marginTop:'80px' }}>
          <Group/>
        </Box>
      )}
      {value === 2 && (
        <Box sx={{ marginTop:'80px' }}>
          <Private/>
        </Box>
      )}
      {value === 3 && (
        <Box sx={{ marginTop:'80px' }}>
          <Public/>
        </Box>
      )}{value === 4 && (
        <Box sx={{ marginTop:'80px' }}>
          <Video/>
        </Box>
      )}
      {value === 5 && (
        <Box sx={{ marginTop:'80px' }}>
          <Setting/>
        </Box>
      )}
      {/* <Box sx={{ bgcolor: "background.paper", width: 500 }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            fullWidth
            centered
            aria-label="full width tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Group/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Box> */}
    </div>
  );
}
export default Home;
//           <Toolbar>
//             <Box sx={{ width: "100%" }}>
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 variant="scrollable"
//                 scrollButtons
//                 allowScrollButtonsMobile
//                 // aria-label="scrollable force tabs example"
//                 indicatorColor="secondary"
//                 textColor="light"
//                 aria-label="nav tabs example"
//               >
//                 <Tab label="Item One" {...a11yProps(0)} />
//                 <Tab label="Item Two" {...a11yProps(1)} />
//                 <Tab label="Item Three" {...a11yProps(2)} />
//               </Tabs>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <SwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           Item One
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           Item Three
//         </TabPanel>
//       </SwipeableViews>
//       </Box>

//     </div>
//   );
// }
// export default Home; */
