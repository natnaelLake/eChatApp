import ArchiveIcon from "@mui/icons-material/Archive";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestoreIcon from "@mui/icons-material/Restore";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
} from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { MuiFileInput } from "mui-file-input";
import * as React from "react";
import { Image } from "react-bootstrap";
import image from "../../Assets/pexels-chris-hepworth-16047551.jpg";
import imageFive from "../../Assets/pexels-esther-huynh-bich-2340876.jpg";
import imageSix from "../../Assets/pexels-pixabay-219569.jpg";

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function Video() {
  const [value, setValue] = React.useState(0);
  console.log(value);
  const ref = React.useRef(null);
  const [setMessages] = React.useState(() => refreshMessages());
  const [open, setOpen] = React.useState(false);
  const [scroll] = React.useState("paper");
  const [file, setFile] = React.useState(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <div>
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <div>
          <Button
            variant="contained"
            onClick={handleOpen}
            endIcon={<ArrowForwardIosIcon />}
          >
            Post Video
          </Button>
          {value === 0 && (
            <>
              <Box align="center" sx={{ justifyContent: "center" }}>
                <Box spacing={2} direction="column">
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={image} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={image} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={image} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={image} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                </Box>
              </Box>
            </>
          )}
          {value === 1 && (
            <>
              <Box align="center" sx={{ justifyContent: "center" }}>
                <Box spacing={2} direction="column">
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={imageFive} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={imageFive} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={imageFive} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={imageFive} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                </Box>
              </Box>
            </>
          )}

          {value === 2 && (
            <>
              <Box align="center" sx={{ justifyContent: "center" }}>
                <Box spacing={2} direction="column">
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={imageSix} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={imageSix} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={imageSix} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                  <Box sx={{ justifyContet: "center" }}>
                    <Paper sx={{ width: "60%", marginBottom: 4 }}>
                      <Image src={imageSix} width="100%" height="500vh" />
                    </Paper>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </div>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Profile Settings</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5" mb={3}>
                Post Videos
              </Typography>
              <Divider />
              <Box sx={{ justifyContet: "center", marginLeft: "20%" }}>
                <Paper sx={{ width: "60%", marginBottom: 4 }}>
                  <Image src={imageSix} width="100%" height="500vh" />
                </Paper>
              </Box>
              <Divider />
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <MuiFileInput
                  value={file}
                  onChange={handleChange}
                  placeholder="Post Video"
                  fullWidth
                  accept=".png .jpg"
                />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}
const messageExamples = [
  {
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];
