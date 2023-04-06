import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { FirstForm } from "./FirstForm";
import LocationForm from "./LocationForm";
import { GlobalContextProvider } from "./context/global-context";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.egcorps.com/">
        EG Corp
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = [
  "ข้อมูลส่วนตัว",
  "อาชีพและที่อยู่",
  "ทำเลที่ตั้ง",
  "แจ้งการชำระเงิน",
];



const theme = createTheme();

export default function Register() {
  const [activeStep, setActiveStep] = React.useState(0);
  const props = { setActiveStep };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FirstForm {...props} />;
      case 1:
        return <AddressForm {...props} />;
      case 2:
        return <LocationForm {...props} />;
      case 3:
        return <PaymentForm {...props} />;
      default:
        throw new Error("Unknown step");
    }
  }


  return (
    <GlobalContextProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            LAND PROM
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            ลงทะเบียน LP 4/2
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent(activeStep)}
         

          {/* <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography align="center" gutterBottom>
                  <img
                    src="images/logoprom.png"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                </Typography>

                <Typography variant="h5" gutterBottom>
                  ขอบคุณที่สมัครสมาชิกกับเรา
                </Typography>
                <Typography variant="subtitle1">
                  ข้อมูลของคุณจะได้รับการตรวจสอบ และทำการลงทะเบียน
                  สมาชิกทุกท่านจะได้รับรหัสตัวแทน ฯลฯ
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      ย้อนกลับ
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "สมัครสมาชิก" : "ต่อไป"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment> */}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
    </GlobalContextProvider>
  );
}
