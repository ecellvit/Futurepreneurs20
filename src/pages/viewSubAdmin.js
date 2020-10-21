import {
    Typography,
    CircularProgress,
    Card, CardContent,
    List, ListSubheader,
    ListItem, ListItemText,
    Grid, CardMedia
} from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import InfoContext from "../context/InfoContext";
import ActionButton from "../components/ActionButton";
import TextInput from "../components/TextInput";
import { Redirect } from "react-router-dom";
import axios from "axios";

function ViewSubAdmin() {
    const [redirect, setRedirect] = useState(false);
    const [amenities, setAmenities] = useState(false);
    const [amenitiesCost, setAmenitiesCost] = useState(0);
    const [amenitiesPremium, setAmenitiesPremium] = useState([]);
    const [amenitiesEconomy, setAmenitiesEconomy] = useState([]);
    const [messageA, setMessageA] = useState("");
    const [campaign, setCampaign] = useState(false);
    const [campaignDesc, setCampaignDesc] = useState("");
    const [campaignImage, setCampaignImage] = useState("");
    const [campaignTitle, setCampaignTitle] = useState("");
    const [campaignTagline, setCampaignTagline] = useState("");
    const [messageC, setMessageC] = useState("");
    const [code, setCode] = useState("");
    const [found, setFound] = useState(false);

    const [isLoading, setLoading] = useState(false);
    const backend = process.env.REACT_APP_BACKEND_URL;

    const { isLoggedIn } = useContext(
        InfoContext
    );

    const getTeam = async () => {
        const url = `${backend}/admin/getTeam`;
        setLoading(true);
        try {
            await axios.get(url, { code }, {
                headers: {
                    "auth-token": localStorage.getItem("authToken")
                }
            })
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        setFound(true);
                        // setAmenitiesCost(res.data.amenities[0].totalCost)
                        // setAmenitiesPremium(res.data.amenities[0].premium)
                        // setAmenitiesEconomy(res.data.amenities[0].standard)
                        // setAmenities(true);
                    }
                    else {
                        setMessageA(res.data.message);
                    }
                });
        }
        catch (error) {
            console.log(error);
            // setRedirect(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        let isAdmin = localStorage.getItem("userType");
        if (isAdmin !== "A") {
            setRedirect(true);
        }
    }, [isLoggedIn]);

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <div className="amenities-page-container">
            <div className="inner-data">
                <Grid container spacing={2} justify='center'>
                    <Grid item xs={12} sm={8} md={6}>
                        <TextInput
                            id="TC"
                            label="Team Code"
                            type="text"
                            className="form-input"
                            variant="outlined"
                            value={code}
                            onChange={(e, v) => { setCode(v) }}
                        /></Grid>
                    <Grid item xs={8} sm={6} md={12}>
                        <ActionButton
                            className="login-btn"
                            onClick={getTeam}
                            disabled={isLoading ? true : false}
                            children={!isLoading ? (
                                "Get latest Data"
                            ) : (
                                    <CircularProgress
                                        color="secondary"
                                        size={20}
                                        thickness={5}
                                    />
                                )}
                        />
                    </Grid>
                </Grid>
                {found ?
                    <>
                        <Typography variant="h3" color="primary" className="login-head">
                            Amenities
                        </Typography>
                        {amenities
                            ? <>
                                <Typography variant="h4" >Total Cost: {amenitiesCost}</Typography>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} md={6} justify="center">
                                        <Typography variant="h5" >Premium Rooms (Cost per Room: {amenitiesPremium.cpr === null ? 0 : amenitiesPremium.cpr})</Typography>
                                        <Typography variant="h6" >Number of Room: {amenitiesPremium.number === null ? 2 : amenitiesPremium.number}</Typography>
                                        <List subheader={<ListSubheader>Amenities</ListSubheader>}>
                                            {(amenitiesPremium.amenities).map((amen) => <ListItem>
                                                <ListItemText primary={amen.title} secondary={'₹' + amen.cost} />
                                            </ListItem>)}
                                        </List>
                                        <List subheader={<ListSubheader>Marketing</ListSubheader>}>
                                            <ListItem>
                                                <ListItemText primary={(amenitiesPremium.marketing).title} secondary={'₹' + (amenitiesPremium.marketing).cost} />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid item xs={12} md={6} justify="center">
                                        <Typography variant="h5" >Standard Rooms (Cost per Room: {amenitiesEconomy.cpr === null ? 0 : amenitiesEconomy.cpr})</Typography>
                                        <Typography variant="h6" >Number of Room: {amenitiesEconomy.number === null ? 0 : amenitiesEconomy.number}</Typography>
                                        <List subheader={<ListSubheader>Amenities</ListSubheader>}>
                                            {(amenitiesEconomy.amenities).map((amen) => <ListItem>
                                                <ListItemText primary={amen.title} secondary={'₹' + amen.cost} />
                                            </ListItem>)}
                                        </List>
                                        <List subheader={<ListSubheader>Marketing</ListSubheader>}>
                                            <ListItem>
                                                <ListItemText primary={(amenitiesEconomy.marketing).title} secondary={'₹' + (amenitiesEconomy.marketing).cost} />
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid>
                            </>
                            : <Typography variant="h5">{messageA}</Typography>
                        }
                        <br />
                        <Typography variant="h3" color="primary" className="login-head">
                            Campaign
                        </Typography>
                        {campaign
                            ?
                            <Card style={{ minWidth: 300, maxWidth: '40%', margin: '40px auto' }}>
                                <CardMedia
                                    style={{ paddingTop: 300 }}
                                    image={campaignImage}
                                    title="Marketing"
                                />
                                <CardContent>
                                    <Typography variant="h4" color="primary">{campaignTitle}</Typography>
                                    <Typography variant="h6" color="secondary">{campaignTagline}</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {campaignDesc}
                                    </Typography>
                                </CardContent>
                            </Card>
                            : <Typography variant="h5">{messageC}</Typography>
                        }
                    </>
                    : null}
            </div>
        </div >
    );
}

export default ViewSubAdmin;