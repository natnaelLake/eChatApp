import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import image from "../../Assets/pexels-chris-hepworth-16047551.jpg";
import imageFive from "../../Assets/pexels-esther-huynh-bich-2340876.jpg";
import imageSix from "../../Assets/pexels-pixabay-219569.jpg";
import { Image } from "react-bootstrap";
import Home from "../Home";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function Video() {
  const [value, setValue] = React.useState(0);
  console.log(value)
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <div>
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <div>
          {/* <Home /> */}
          { value === 0 && 
            (<>
              <Box align="center">
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      R
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Shrimp and Chorizo Paella"
  subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={image} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ marginTop: "-90px" }}>
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
              <br />
              <Box align="center">
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
avatar={
  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    R
  </Avatar>
}
action={
  <IconButton aria-label="settings">
    <MoreVertIcon />
  </IconButton>
}
title="Shrimp and Chorizo Paella"
subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={image} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
              <br />
              <Box align="center" sx={{ marginTop: "10px" }}>
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
avatar={
<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  R
</Avatar>
}
action={
<IconButton aria-label="settings">
  <MoreVertIcon />
</IconButton>
}
title="Shrimp and Chorizo Paella"
subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={image} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ marginTop: "-90px" }}>
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
              <br />
              <Box align="center">
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      R
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Shrimp and Chorizo Paella"
  subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={image} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ marginTop: "-90px" }}>
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
            </>) 
            
}
{ value === 1 && 
            (<>
              <Box align="center">
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      R
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Shrimp and Chorizo Paella"
  subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={imageFive} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ marginTop: "-90px" }}>
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
              <br />
              <Box align="center">
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
avatar={
  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    R
  </Avatar>
}
action={
  <IconButton aria-label="settings">
    <MoreVertIcon />
  </IconButton>
}
title="Shrimp and Chorizo Paella"
subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={imageFive} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
              <br />
              <Box align="center" sx={{ marginTop: "10px" }}>
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
avatar={
<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  R
</Avatar>
}
action={
<IconButton aria-label="settings">
  <MoreVertIcon />
</IconButton>
}
title="Shrimp and Chorizo Paella"
subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={imageFive} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ marginTop: "-90px" }}>
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
              <br />
              <Box align="center">
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      R
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Shrimp and Chorizo Paella"
  subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={imageFive} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ marginTop: "-90px" }}>
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
            </>) 
}
            
{ value === 2 && 
            (<>
              <Box align="center">
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      R
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Shrimp and Chorizo Paella"
  subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={imageSix} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ marginTop: "-90px" }}>
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
              <br />
              <Box align="center">
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
avatar={
  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    R
  </Avatar>
}
action={
  <IconButton aria-label="settings">
    <MoreVertIcon />
  </IconButton>
}
title="Shrimp and Chorizo Paella"
subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={imageSix} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
              <br />
              <Box align="center" sx={{ marginTop: "10px" }}>
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
avatar={
<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  R
</Avatar>
}
action={
<IconButton aria-label="settings">
  <MoreVertIcon />
</IconButton>
}
title="Shrimp and Chorizo Paella"
subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={imageSix} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ marginTop: "-90px" }}>
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
              <br />
              <Box align="center">
                <Card sx={{ maxWidth: 345 }}>
                  {/* <CardHeader
  avatar={
    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      R
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Shrimp and Chorizo Paella"
  subheader="September 14, 2016"
/> */}
                  <CardContent sx={{ marginTop: "0" }}>
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginBottom: "-195px", marginLeft: "290px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-190px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-200px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      aria-label="share"
                      sx={{ marginBottom: "-210px", marginLeft: "290px" }}
                    >
                      <ShareIcon />
                    </IconButton>
                    <Image src={imageSix} width="345px" height="100%" />
                    {/* <CardActions disableSpacing> */}
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ marginTop: "-90px" }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ marginTop: "-90px" }}>
                      <ShareIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
            </>) 
}
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
