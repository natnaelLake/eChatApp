import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { React, useState } from "react";
import { Card } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import { useAuthControl } from "../../Hooks/useAuthControl";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const { Register, errorData } = useAuthControl();
  const {
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    phoneError,
    error,
  } = errorData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Register(firstName, lastName, email, password, phone);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Card
        style={{ width: "20rem", marginTop: "8rem", marginBottom: "3rem" }}
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
              {error !== "" && (
                <Typography sx={{ paddingLeft: 2 }} color="error">
                  {error}
                </Typography>
              )}
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <PersonIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
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
                  type="text"
                  id="FirstName"
                  label="First Name"
                  name="firstname"
                  autoComplete="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
                {firstNameError !== "" && (
                  <Typography sx={{ paddingLeft: 2 }} color="error">
                    {firstNameError}
                  </Typography>
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="text"
                  id="lasName"
                  label="Last Name"
                  name="lastname"
                  autoComplete="text"
                  onChange={(e) => setLastName(e.target.value)}
                  autoFocus
                />
                {lastNameError !== "" && (
                  <Typography sx={{ paddingLeft: 2 }} color="error">
                    {lastNameError}
                  </Typography>
                )}
                <TextField
                  margin="normal"
                  type="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
                {emailError !== "" && (
                  <Typography sx={{ paddingLeft: 2 }} color="error">
                    {emailError}
                  </Typography>
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="tel"
                  type="tel"
                  pattern="[0-9]{10}"
                  onChange={(e) => setPhone(e.target.value)}
                  autoFocus
                />
                {phoneError !== "" && (
                  <Typography sx={{ paddingLeft: 2 }} color="error">
                    {phoneError}
                  </Typography>
                )}
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
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
                    <Link href="/login" variant="body2">
                      Have an Account?
                    </Link>
                  </Grid>
                </Grid>
                <br />
                <Box textAlign="center">
                  <Button variant="outlined" color="secondary" type="submit">
                    Register
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

export default SignUp;