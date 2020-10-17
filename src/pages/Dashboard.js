import {
    Typography,
    Container,
    Grid,
  }from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './Dashboard.css';

export default function Dashboard() {
    return (
        <>
        <Container className="login-page">
            <Typography variant="h3" color="primary" className="login-head">
                DASHBOARD
            </Typography>
            <br/>
            <br/>
            <Link to="/login" className="link">
                <Button variant="contained" color="primary" disableElevation>
                    Login
                </Button>
            </Link>
            <br/>
            <br/>
            <Link to="/signup" className="link">
                <Button variant="contained" color="primary" disableElevation>
                    Sign Up
                </Button>
            </Link>
        </Container>
        </>
    );
}