import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import { GlobalContext } from "./context/global-context";
import { useContext, useState } from "react";

// export default function FirstForm(navigation) {
export const FirstForm = (navigation) => {
  const [state, dispatch] = useContext(GlobalContext);
  const [password, setPassword] = useState(state.password || "");
  const [email, setEmail] = useState(state.email || "");
  const [name, setName] = useState(state.name || "");
  const [surname, setSurname] = useState(state.surname || "");
  const [tel, setTel] = useState(state.tel || "");
  const { next } = navigation;

  const [values, setValues] = useState({
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const handleNext = () => {
    // if (email === "" || password === "") return;
    // dispatch({
    //   type: "SAVE_LOGIN_INFO",
    //   email: email,
    //   password: password
    // });
    // setActiveStep(activeStep + 1);
    next();
  };

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ข้อมูลส่วนตัว
          </Typography>
          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="นามสกุล"
                  name="lastName"
                  defaultValue={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="tel"
                  label="เบอร์โทรศัพท์"
                  name="tel"
                  defaultValue={tel}
                  onChange={(e) => setTel(e.target.value)}
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={values.showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {values.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="ฉันยินยอมรับข้อมูลข่าวสาร ข้อมูลทางการตลาด ต่างๆ จากทางบริษัท"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
        <React.Fragment>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {/* <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      ย้อนกลับ
                    </Button> */}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                   ต่อไป
                  </Button>
                </Box>
              
          </React.Fragment>
      </Container>

  );
};