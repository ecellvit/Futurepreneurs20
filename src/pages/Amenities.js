import React from 'react';
import '../App.css';
import {Grid,Typography} from '@material-ui/core';
import SimpleTabs from '../components/SimpleTabs';
import BasicTextFields from '../components/form';
import BasicTextField from '../components/readOnlyBox';
import TextInput from "../components/TextInput";

export default function Amenities() {
  return (
    <div className="App">
      <Grid container direction="column" spacing={2}>
        <Grid item container>
        <Grid item sm={2}><TextInput
        id="password"
        type={"text"}
        label="Password"
        className="form-input"
        variant="outlined"
        /></Grid>
        <Grid item sm={8}><BasicTextFields helper="Number of economy rooms"/></Grid>
        <Grid item sm={2}><BasicTextField helper="Total Cost"/></Grid>
        </Grid> 
        <Grid item container>
          <Grid item conatiner direction="column" sm={2}>
          <Typography variant="h5" color="primary" className="login-head">
                Premium Room
            </Typography>
          <Grid item>
          <BasicTextField helper="Amenities Cost"/>
          </Grid>
          <Grid item>
          <BasicTextField helper="Marketing Cost"/>
          </Grid>
          <Grid item>
          <BasicTextFields helper="Reason for choosing Amenities"/>
          </Grid>
          <Typography variant="h5" color="primary" className="login-head">
                Economy Room
            </Typography>
          <Grid item>
          <BasicTextField helper="Amenities Cost"/>
          </Grid>
          <Grid item>
          <BasicTextField helper="Marketing Cost"/>
          </Grid>
          <Grid item>
          <BasicTextFields helper="Reason for choosing Amenities"/>
          </Grid>
          </Grid>
          <Grid item container direction="column" spacing={2} sm={10}>
            <Grid item sm={12}><SimpleTabs/></Grid>
          </Grid>
        </Grid>  
      </Grid>
    </div>
  );
}

