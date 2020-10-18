import React, { useState } from 'react';
import { Grid, Typography, Chip, Button } from '@material-ui/core';
import SimpleTabs from '../components/SimpleTabs';
import BasicTextFields from '../components/form';
import TextInput from "../components/TextInput";
import './Amenities.css';

export default function Amenities() {

  const [cost, setCost] = useState("");

  return (
    <div className="App">
      <Grid container direction="column" spacing={2}>
        <Grid item container>
          <Grid item sm={2}>
            <TextInput
              id="password"
              type={"text"}
              label="Number of Premium Rooms"
              className="input"
              variant="outlined" />
          </Grid>
          <Grid item sm={8}>
            <TextInput
              id="password"
              type={"text"}
              label="Number of Economy Rooms"
              className="input"
              variant="outlined" />
          </Grid>
          <Grid item sm={2}>
            <Chip color="primary" label={`Total Cost:${cost}`} variant="outlined" className="chip" />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item conatiner direction="column" sm={2}>
            <Typography variant="h5" color="primary" className="login-head">
              Premium Room
            </Typography>
            <br />
            <Grid item>
              <TextInput
                id="password"
                type={"text"}
                label="Amenities Cost"
                className="input"
                variant="outlined" />
            </Grid>
            <br />
            <Grid item>
              <TextInput
                id="password"
                type={"text"}
                label="Marketing Cost"
                className="input"
                variant="outlined" />
            </Grid>
            <br />
            <Grid item>
              <BasicTextFields helper="Reason for choosing Amenities" />
            </Grid>
            <Typography variant="h5" color="primary" className="login-head">
              Economy Room
            </Typography>
            <br />
            <Grid item>
              <TextInput
                id="password"
                type={"text"}
                label="Amenities Cost"
                className="input"
                variant="outlined" />
            </Grid>
            <br />
            <Grid item>
              <TextInput
                id="password"
                type={"text"}
                label="Marketing Cost"
                className="input"
                variant="outlined" />
            </Grid>
            <br />
            <Grid item>
              <BasicTextFields helper="Reason for choosing Amenities" />
            </Grid>
            {/* <Button onClick={ ()=> {setCost("500") }}>Hello Baby</Button> */}
          </Grid>
          <Grid item container direction="column" spacing={2} sm={10}>
            <Grid item sm={12}><SimpleTabs /></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

