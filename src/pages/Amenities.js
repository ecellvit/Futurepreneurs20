import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Grid, Typography, Chip, Button } from '@material-ui/core';
import SimpleTabs from '../components/SimpleTabs';
import BasicTextFields from '../components/form';
import TextInput from "../components/TextInput";
import './Amenities.css';

export default function Amenities() {

  const [totalCost, setTotalCost] = useState("");
  const [PAcost, setPAcost] = useState("");
  const [PMcost, setPMcost] = useState("");
  const [EAcost, setEAcost] = useState("");
  const [EMcost, setEMcost] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let isLogged = localStorage.getItem("authToken");
    if (isLogged === null) {
      setRedirect(true);
    }
  })

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <div className="amenities-page-container">
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
            <Chip color="primary" label={`Total Cost:${totalCost}`} variant="outlined" className="chip" />
          </Grid>
        </Grid>
        <br />
        <Grid item container>
          <Grid item container direction="column" sm={2}>
            <Typography variant="h5" color="primary" className="room-title">
              Premium Room
            </Typography>
            <br />
            <Grid item>
              <Chip color="primary" label={`Amenities Cost:${PAcost}`} variant="outlined" className="chip" />
            </Grid>
            <br />
            <Grid item>
              <Chip color="primary" label={`Marketing Cost:${PMcost}`} variant="outlined" className="chip" />
            </Grid>
            <br />
            <Grid item>
            <TextInput
              id="password"
              type={"text"}
              helperText="Reason for choosing these amenities"
              label="Type Here"
              className="input"
              variant="outlined" 
              multiline
              rows={3}
              />

            </Grid>
            <br />
            <br />
            <Typography variant="h5" color="primary" className="login-head">
              Economy Room
            </Typography>
            <br />
            <Grid item>
              <Chip color="primary" label={`Amenities Cost:${EAcost}`} variant="outlined" className="chip" />
            </Grid>
            <br />
            <Grid item>
              <Chip color="primary" label={`Marketing Cost:${EMcost}`} variant="outlined" className="chip" />
            </Grid>
            <br />
            <Grid item>
            <TextInput
              id="password"
              type={"text"}
              helperText="Reason for choosing these amenities"
              label="Type Here"
              className="input"
              variant="outlined" 
              multiline
              rows={3}
              />
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

