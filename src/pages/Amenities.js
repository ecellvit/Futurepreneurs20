import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from '../header';
import RecipeReviewCard from '../cards';
import SimpleTabs from '../tab';
import BasicTextFields from '../form'
import BasicTextField from '../readOnlyBox'
import DiscreteSlider from '../slider'

export default function Amenities() {
  return (
    <div className="App">
      <Grid container direction="column" spacing={2}>
        <Grid item container>
        <Grid item sm={2}><BasicTextFields helper="Number of premium rooms"/></Grid>
        <Grid item sm={8}><BasicTextFields helper="Number of economy rooms"/></Grid>
        <Grid item sm={2}><BasicTextField helper="Total Cost"/></Grid>
        </Grid> 
        <Grid item container>
          <Grid item conatiner direction="column" sm={2}>
          <h1>Premium Room</h1>
          <Grid item>
          <BasicTextField helper="Amenities Cost"/>
          </Grid>
          <Grid item>
          <BasicTextField helper="Marketing Cost"/>
          </Grid>
          <Grid item>
          <BasicTextFields helper="Reason for choosing Amenities"/>
          </Grid>
          <h1>Economy Room</h1>
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

