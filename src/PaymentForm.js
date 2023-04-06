import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import Stack from "@mui/material/Stack";

export default function PaymentForm() {
  const [time, setTime] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const [Bank, setBank] = React.useState("female");

  const handleChange = (event) => {
    setBank(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        แจ้งการชำระเงิน
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              ธนาคารที่โอน
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={Bank}
              onChange={handleChange}
            >
              <FormControlLabel
                value="kbank"
                control={<Radio />}
                label="ธ.กสิกรไทย xxxxxxx สาขา xxx"
              />
              <FormControlLabel
                value="scb"
                control={<Radio />}
                label="ธ.ไทยพาณิชย์ xxxxxxx สาขา xxx"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id="amount"
            label="ยอดโอน"
            fullWidth
            autoComplete="amount"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="วันที่โอน"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="เวลาที่โอน"
              value={time}
              ampm={false}
              onChange={(newValue) => {
                setTime(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
            </label>
          </Stack>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
