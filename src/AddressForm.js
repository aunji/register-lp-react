import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        อาชีพ และ ที่อยู่
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            required
            id="occupation"
            name="occupation"
            label="อาชีพ"
            fullWidth
            autoComplete="occupation"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="ที่อยู่"
            fullWidth
            autoComplete="address"
            variant="standard"
          />
        </Grid> 
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tambon"
            name="tambon"
            label="ตำบล"
            fullWidth
            autoComplete="tambon"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="amphoe"
            name="amphoe"
            label="อำเภอ"
            fullWidth
            autoComplete="amphoe"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="province"
            name="province"
            label="จังหวัด"
            fullWidth
            autoComplete="state"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zipcode"
            name="zipcode"
            label="รหัสไปรษณีย์"
            fullWidth
            autoComplete="zipcode"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}