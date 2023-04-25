import { Card } from "react-bootstrap";
import { React, MouseEvent, useState, Fragment } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { purple } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuthControl } from "../../Hooks/useAuthControl";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login,errorData} = useAuthControl();
  const {emailError,passwordError,error} = errorData
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // const email = data.get('email')
    // const password = data.get('password')
    await Login(email, password);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // console.log('email error is : ',emailError)
  return (
    <div>
      <Card
        style={{ width: "20rem", marginTop: "8rem" }}
        bg="light"
        className="shadow mx-auto "
      >
        <Card.Body>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >              
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <PersonIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                {emailError !== '' && <Typography sx = {{paddingLeft:2}}color = 'error'>{emailError}</Typography>}
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={(event) => setPassword(event.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                {passwordError !== '' && <Typography sx = {{paddingLeft:2}} color = 'error'>{passwordError}</Typography>}
                </FormControl>
                <br />
                <br />
                <Grid
                  container
                  style={{ justifyContent: "center" }}
                  textAlign="center"
                >
                  <Grid item xs>
                    <Link href="/signup" variant="body2">
                      Create Account?
                    </Link>
                  </Grid>
                </Grid>
                <br />
                <Box textAlign="center">
                  <Button variant="outlined" color="secondary" type="submit">
                    Login
                  </Button>
                </Box>
                <Grid container style={{ justifyContent: "center" }}>
                  <Grid item xs>
                    <Link href="/login" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
