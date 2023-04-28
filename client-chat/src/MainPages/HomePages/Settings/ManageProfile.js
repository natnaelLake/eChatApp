import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Button,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import imageTwo from "../../../Assets/pexels-mirco-violent-blur-4033244.jpg";
import imageThree from "../../../Assets/pexels-chris-hepworth-16047551.jpg";
import imageFour from "../../../Assets/pexels-david-bartus-610294.jpg";
import imageFive from "../../../Assets/pexels-esther-huynh-bich-2340876.jpg";
import imageSix from "../../../Assets/pexels-pixabay-219569.jpg";
import imageSeven from "../../../Assets/pexels-максим-11896928.jpg";
import { MuiFileInput } from "mui-file-input";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "mui-image";
function ManageProfile() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
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
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #23",
      description: "Hello World!",
    },
    {
      name: "Random Name #4",
      description: "Hello World!",
    },
    {
      name: "Random Name #5",
      description: "Hello World!",
    },
  ];

  return (
    <Stack sx={{ height: "100%", width: "100%" }} spacing={0} direction="row">
      <Stack sx={{ width: "40%" }}>
        <Box sx={{ justifyContent: "center" }}>
          <Paper sx={{ width: "100%", height: "100vh" }} elevation={0}>
            <Stack>
              <Typography color="white">
                Welcome To Profile Management
              </Typography>
            </Stack>
            <Stack>
              <Avatar
                alt="Welcome"
                src={imageTwo}
                variant="rounded"
                sx={{
                  marginLeft: "20%",
                  marginTop: 2,
                  width: "30%",
                  height: "30%",
                }}
              />
              <Typography
                sx={{
                  marginLeft: "20%",
                  marginTop: 2,
                }}
                color="primary.light"
              >
                Biography
              </Typography>
              <Paper
                sx={{
                  marginTop: 2,
                  marginLeft: "20%",
                }}
                elevation={3}
              >
                <Typography
                  sx={{
                    margin: "2%",
                    width: "100%",
                  }}
                  color="success.light"
                >
                  Lorem ipsum dolor
                </Typography>
              </Paper>
              <Button
                variant="contained"
                alignItems="center"
                color="secondary"
                sx={{ width: "20%", marginLeft: "40%", marginTop: 2 }}
                onClick={handleOpen}
              >
                Update
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Stack>
      <Stack sx={{ width: "60%" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "60%",
              height: "100%",
            },
            justifyContent: "center",
          }}
        >
          {/* <Paper> */}
            <Stack spacing={2} direction = 'column'>
            <Stack>
                <Typography variant='h3' >Your Posted Images</Typography>
              </Stack>
              <Stack>
                <Carousel
                  NextIcon={<NavigateNextIcon />}
                  PrevIcon={<ArrowBackIosNewIcon />}
                  swipe={true}
                  duration={300}
                  animation={"slide"}
                  navButtonsAlwaysVisible={true}
                  // interval={4000}
                >
                  <Paper>
                    <Image src={imageTwo} width={500} height={300} />
                  </Paper>
                  <Paper>
                    <Image src={imageThree} width={500} height={300} />
                  </Paper>
                  <Paper>
                    <Image src={imageFour} width={500} height={300} />
                  </Paper>
                </Carousel>
              </Stack>
              {/* <Box sx={{justifyContent:"center"}}> */}
              <Stack>
                <Typography variant='h3'>Your Posted Videos</Typography>
              </Stack>
                <Stack spacing={2} direction = 'column'>
                  <Paper sx={{ width: '100%' }}>
                    <Image src={imageSeven} width='100%' height={400} />
                  </Paper>
                  <Paper>
                    <Image src={imageFour} width='100%' height={300} />
                  </Paper>
                  <Paper>
                    <Image src={imageFive} width='100%' height={300} />
                  </Paper>
                </Stack>
              {/* </Box> */}
            </Stack>
          {/* </Paper> */}
          {/* <Paper elevation={1}  sx = {{bgcolor:'primary.light'}}/>
          <Paper sx = {{bgcolor:'primary.light'}}/>
          <Paper elevation={3} sx = {{bgcolor:'primary.light'}}/>
          <Paper elevation={3} sx = {{bgcolor:'primary.light'}}/>
          <Paper elevation={3} sx = {{bgcolor:'primary.light'}}/>
          <Paper elevation={3} sx = {{bgcolor:'primary.light'}}/>
          <Paper elevation={3} sx = {{bgcolor:'primary.light'}}/> */}
        </Box>
      </Stack>
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
            <Typography component="h1" variant="h5">
              Update Your Profile
            </Typography>
            <Divider />
            <Avatar
              alt="Welcome"
              src={imageTwo}
              // variant="rounded"
              sx={{
                marginLeft: 2,
                marginTop: 4,
                width: "30%",
                height: "30%",
              }}
            />
            <Divider />
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <MuiFileInput
                value={file}
                onChange={handleChange}
                placeholder="Update Profile Image"
                fullWidth
                accept=".png .jpg"
              />
              <TextField
                margin="normal"
                fullWidth
                type="text"
                id="ChannelName"
                label="Update First Name"
                name="firstname"
                autoComplete="text"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                type="text"
                id="ChannelName"
                label="Update Last Name"
                name="firstname"
                autoComplete="text"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                type="text"
                id="ChannelName"
                label="Update Email"
                name="firstname"
                autoComplete="text"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                type="text"
                id="ChannelName"
                label="Update Password"
                name="firstname"
                autoComplete="text"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                id="ChannelName"
                label="Confirm Password"
                name="firstname"
                autoComplete="text"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                type="text"
                id="ChannelName"
                label="Update Biography"
                name="firstname"
                autoComplete="text"
                autoFocus
              />
              <Box textAlign="center">
                <Button variant="outlined" color="secondary" type="submit">
                  Update
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
export default ManageProfile;
