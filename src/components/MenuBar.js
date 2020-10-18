import { Typography, Container, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ActionButton from './ActionButton';

import './MenuBar.css';

export default function MenuBar() {
    const userType = localStorage.getItem("userType");
    switch (userType) {
        case "A":
            return (
                <Grid container spacing={2} className="menubar">
                    <Grid item>
                        <Link to="/signup">
                            <ActionButton variant="contained" color="primary" disableElevation>
                                Register a Team
                            </ActionButton>
                        </Link>
                    </Grid>
                </Grid>
            );
        case "L":
            return (
                <Grid container spacing={2} className="menubar">
                    <Grid item>
                        <Link to="/amenities">
                            <ActionButton variant="contained" color="primary" disableElevation>
                                Fill Amenities
                            </ActionButton>
                        </Link>
                    </Grid>
                </Grid>
            )
        case "S":
            return (
                <Grid container spacing={2} className="menubar">
                    <Grid item>
                        <Link to="/viewAmenities">
                            <ActionButton variant="contained" color="primary" disableElevation>
                                Check Amenities
                            </ActionButton>
                        </Link>
                    </Grid>
                </Grid>
            )
        default:
            return (
                <Grid container spacing={2} className="menubar">
                    <Grid item>
                        <Link to="/login">
                            <ActionButton variant="contained" color="primary" disableElevation>
                                Login
                            </ActionButton>
                        </Link>
                    </Grid>
                </Grid>
            )
    }
}