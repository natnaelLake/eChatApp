import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { React, useState } from "react";
import { Card } from "react-bootstrap";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import { useAuthControl } from "../../Hooks/useAuthControl";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, errorData } = useAuthControl();
  const { emailError, passwordError } = errorData;
  const navigate = useNavigate();
  const handleSignup = ()=>{
    navigate("/signup")
  }
  const handleForgetButton = ()=>{
    navigate("/login")
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    await Login(email, password);
  };
  console.log(errorData);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
                {emailError !== "" && (
                  <Typography sx={{ paddingLeft: 2 }} color="error">
                    {emailError}
                  </Typography>
                )}
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
                  {passwordError !== "" && (
                    <Typography sx={{ paddingLeft: 2 }} color="error">
                      {passwordError}
                    </Typography>
                  )}
                </FormControl>
                <br />
                <br />
                <Grid
                  container
                  style={{ justifyContent: "center" }}
                  textAlign="center"
                >
                  <Grid item xs>
                    <Link onClick = {handleSignup} variant="body2">
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
                    <Link onClick={handleForgetButton} variant="body2">
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