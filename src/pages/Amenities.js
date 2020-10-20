import React, { useState, useContext, useEffect } from "react";
import InfoContext from "../context/InfoContext";
import { Redirect } from "react-router-dom";
import { Grid, Typography, Chip, CircularProgress } from '@material-ui/core';
import SimpleTabs from '../components/SimpleTabs';
import TextInput from "../components/TextInput";
import './Amenities.css';
import ActionButton from "../components/ActionButton";
import axios from 'axios';

export default function Amenities() {

  const [totalCost, setTotalCost] = useState(0);
  const [PAcost, setPAcost] = useState(0);
  const [PMcost, setPMcost] = useState(0);
  const [EAcost, setEAcost] = useState(0);
  const [EMcost, setEMcost] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [Message, setMessage] = useState("");
  const [numPremium, setNumPremium] = useState(2);
  const [numEconomy, setNumEconomy] = useState(3);
  const [selectedPremium, setPremium] = useState([]);
  const [selectedEconomy, setEconomy] = useState([]);
  const [selectedPM, setSelectedPM] = useState(null);
  const [selectedEM, setSelectedEM] = useState(null);
  const [pReason, setPReason] = useState("");
  const [eReason, setEReason] = useState("");
  const [cpr_P, setP] = useState(0);
  const [cpr_E, setE] = useState(0);

  const { isLoggedIn } = useContext(
    InfoContext
  );

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

  const backend = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async () => {
    setMessage("");
    const url = `${backend}/amenities/add`;
    setLoading(true);
    if (selectedEconomy.length < 5 || selectedPremium.length < 5) {
      setMessage("Select 5 amenities for each type of room");
    } else if (pReason.trim() === "" || eReason.trim() === "") {
      setMessage("Please give us the reasons for your choice of amenities");
    } else if (selectedPM === null || selectedEM === null) {
      setMessage("Select one marketing element for each type of room");
    } else if (totalCost > 100000) {
      setMessage("Total Cost cannot exceed ₹100000");
    } else {
      const data = {
        premium: {
          amenities: selectedPremium,
          marketing: selectedPM,
          number: numPremium,
          reason: pReason,
          cpr: cpr_P.toFixed(2)
        },
        standard: {
          amenities: selectedEconomy,
          marketing: selectedEM,
          number: numEconomy,
          reason: eReason,
          cpr: cpr_E.toFixed(2)
        },
        totalCost
      };
      console.log(url, data);
      if (localStorage.getItem("userType") === "L") {
        try {
          await axios.post(url, data, {
            headers: {
              "auth-token": localStorage.getItem("authToken")
            }
          })
            .then((res) => {
              console.log(res);
              setMessage(res.data.message);
              if (res.status === 200) {
                setRedirect(true);
              }
            });
        } catch (error) {
          console.log(error);
        }
      } else {
        setMessage("You are not authorised as Team Leader")
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    if (!isLoggedIn) {
      setRedirect(true);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    let i, sum = 0;
    for (i = 0; i < selectedPremium.length; i++) {
      sum += selectedPremium[i].cost;
    }
    setPAcost(sum);
  }, [selectedPremium]);

  useEffect(() => {
    let i, sum = 0;
    for (i = 0; i < selectedEconomy.length; i++) {
      sum += selectedEconomy[i].cost;
    }
    setEAcost(sum);
  }, [selectedEconomy]);

  useEffect(() => {
    if (selectedEM !== null)
      setEMcost((selectedEM.cost / numEconomy));
  }, [numEconomy, selectedEM]);

  useEffect(() => {
    if (selectedPM !== null)
      setPMcost((selectedPM.cost / numPremium));
  }, [numPremium, selectedPM]);

  useEffect(() => {
    setTotalCost((cpr_P * numPremium) + (cpr_E * numEconomy));
  }, [cpr_E, cpr_P, numEconomy, numPremium]);

  useEffect(() => {
    setP(PAcost + PMcost + 3200 + (6000 / numPremium));
  }, [PAcost, PMcost, numPremium]);

  useEffect(() => {
    setE(EAcost + EMcost + 1700 + (9000 / numEconomy));
  }, [EAcost, EMcost, numEconomy]);

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <div className="amenities-page-container">
      <Grid container direction="column" spacing={2}>
        <Grid item container xs={12} spacing={2} justify="center">
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
              label="Number of Standard Rooms"
              className="input"
              value={numEconomy}
              onChange={handlenumEconomyChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Chip color="primary" label={`Total Cost: ₹${totalCost.toFixed(2)}`} variant="outlined" className="chip" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ActionButton
              onClick={handleSubmit}
              children={!isLoading ? (
                "Submit"
              ) : (
                  <CircularProgress
                    color="secondary"
                    size={20}
                    thickness={5}
                  />
                )}
              className="submit-btn"
            />
            <Typography variant="h6" color="secondary" className="submit-message">{Message}</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} >
          <Grid item container xs={12} sm={6} md={4} lg={3} justify="center" >
            <Grid item xs={12}>
              <Typography variant="h5" color="primary" className="room-title">
                Premium Room
            </Typography>
            </Grid>
            <br />
            <Grid item container xs={12} spacing={2} justify="center">
              <Grid item >
                <Chip color="primary" label={`Amenities Cost: ₹${PAcost.toFixed(2)}`} variant="outlined" className="chip" />
              </Grid>
              <Grid item>
                <Chip color="primary" label={`Marketing Cost: ₹${PMcost.toFixed(2)}`} variant="outlined" className="chip" />
              </Grid>
            </Grid>
            <br />
            <Grid item >
              <Chip color="primary" label={`Cost per room: ₹${cpr_P.toFixed(2)}`} variant="outlined" className="chip" />
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
            <Typography variant="h5" color="primary" className="login-head">
              Standard Room
            </Typography>
            <br />
            <Grid item container xs={12} spacing={2} justify="center">
              <Grid item >
                <Chip color="primary" label={`Amenities Cost: ₹${EAcost.toFixed(2)}`} variant="outlined" className="chip" />
              </Grid>
              <Grid item>
                <Chip color="primary" label={`Marketing Cost: ₹${EMcost.toFixed(2)}`} variant="outlined" className="chip" />
              </Grid>
            </Grid>
            <br />
            <Grid item>
              <Chip color="primary" label={`Cost per room: ₹${cpr_E.toFixed(2)}`} variant="outlined" className="chip" />
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

