import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Grid, Typography, Chip } from '@material-ui/core';
import SimpleTabs from '../components/SimpleTabs';
import TextInput from "../components/TextInput";
import './Amenities.css';
import ActionButton from "../components/ActionButton";

export default function Amenities() {

  const [totalCost, setTotalCost] = useState(0);
  const [PAcost, setPAcost] = useState(0);
  const [PMcost, setPMcost] = useState(0);
  const [EAcost, setEAcost] = useState(0);
  const [EMcost, setEMcost] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [numPremium, setNumPremium] = useState(2);
  const [numEconomy, setNumEconomy] = useState(3);
  const [selectedPremium, setPremium] = useState([]);
  const [selectedEconomy, setEconomy] = useState([]);
  const [selectedPM, setSelectedPM] = useState(null);
  const [selectedEM, setSelectedEM] = useState(null);
  const [pReason, setPReason] = useState("");
  const [eReason, setEReason] = useState("");


  const handlenumPremiumChange = (event) => {
    if (event.target.value <= 4 && event.target.value >= 2)
      setNumPremium(event.target.value);
  }

  const handlenumEconomyChange = (event) => {
    if (event.target.value <= 6 && event.target.value >= 3)
      setNumEconomy(event.target.value);
  }

  const handlePReasonChange = (event) => {
    setPReason(event.target.value);
  }

  const handleEReasonChange = (event) => {
    setEReason(event.target.value);
  }

  const handleSubmit = () => {
    console.log("Submit");
  }

  useEffect(() => {
    let isLogged = localStorage.getItem("authToken");
    if (isLogged === null) {
      setRedirect(true);
    }
  }, []);

  useEffect(() => {
    let i, sum = 0;
    for(i = 0; i < selectedPremium.length; i++) {
      sum += selectedPremium[i].cost;
    }
    sum *= numPremium;
    setPAcost(sum);
  }, [numPremium, selectedPremium]);

  useEffect(() => {
    let i, sum = 0;
    for(i = 0; i < selectedEconomy.length; i++) {
      sum += selectedEconomy[i].cost;
    }
    sum *= numEconomy;
    setEAcost(sum);
  }, [numEconomy, selectedEconomy]);

  useEffect(() => {
    setEMcost(selectedEM.cost);
  }, [selectedEM]);

  useEffect(() => {
    setEMcost(selectedPM.cost);
  }, [selectedPM]);

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <div className="amenities-page-container">
      <Grid container direction="column" spacing={2}>
        <Grid item container xs={12} spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextInput
              id="no_of_premium"
              type="number"
              label="Number of Premium Rooms"
              className="input"
              value={numPremium}
              onChange={handlenumPremiumChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextInput
              id="no_of_economy"
              type="number"
              label="Number of Economy Rooms"
              className="input"
              value={numEconomy}
              onChange={handlenumEconomyChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Chip color="primary" label={`Total Cost:${totalCost}`} variant="outlined" className="chip" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActionButton onClick={handleSubmit} children="Submit" className="submit-btn" />
          </Grid>
        </Grid>
        <br />
        <Grid item container xs={12}>
          <Grid item container direction="column" xs={12} sm={6} md={4} lg={3} >
            <br />
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
                id="pReason"
                type="text"
                label="Type here"
                className="input"
                helperText="Reason for choosing these amenities"
                value={pReason}
                onChange={handlePReasonChange}
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
                id="eReason"
                type="text"
                label="Type here"
                className="input"
                helperText="Reason for choosing these amenities"
                value={eReason}
                onChange={handleEReasonChange}
                variant="outlined"
                multiline
                rows={3}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" spacing={2} xs={12} sm={6} md={8} lg={9}>
            <Grid item sm={12}>
              <SimpleTabs
                setSelectedPM={setSelectedPM}
                selectedPremium={selectedPremium}
                selectedEconomy={selectedEconomy}
                setPremium={setPremium}
                setEconomy={setEconomy}
                selectedPM={selectedPM}
                selectedEM={selectedEM}
                setSelectedEM={setSelectedEM}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

