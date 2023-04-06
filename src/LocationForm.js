import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import CircularProgress from '@mui/material/CircularProgress';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function LocationForm() {
  const [location, setLocation] = useState([]);
  const [selected, setSelection] = useState([]);
  const [open, setOpen] = useState(false);
  const loading = open && location.length === 0;

  //http://agent.land-prom.com/api/location.php
  //   async function fetchData() {
  //     const res = await fetch("http://agent.land-prom.com/api/location.php");
  //     res.json().then((res) => setLocation(res));
  //   
  // useEffect(() => {
  //   fetch("http://agent.land-prom.com/api/location.php").then((res) =>
  //     res.json().then((res) => setLocation(res))
  //   );
  // }, []);

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        fetch("http://agent.land-prom.com/api/location.php").then((res) =>
        res.json().then((res) => setLocation(res))
      );
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setLocation([]);
    }
  }, [open]);


//   console.log(selected);
//   console.log(selected.id);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ทำเลที่ตั้ง
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Autocomplete
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
            id="location"
            loading={loading}
            options={location}
            isOptionEqualToValue={(location, value) => location.id === value.id}
            onChange={(event, value) => setSelection(value)}
            getOptionLabel={(location)=> `${location.district} ${location.city} ${location.province} ${location.zipcode}`}
            renderOption={(props, location) =>(
                <Box component="li" {...props} key={location.id}>
                     {location.district}  {location.city} {location.province} {location.zipcode}
                </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="ค้นหาทำเล"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
            noOptionsText={'ไม่พบทำเล'}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
