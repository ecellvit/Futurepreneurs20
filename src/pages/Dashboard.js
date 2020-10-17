import { Typography, Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ActionButton from '../components/ActionButton';

import './Dashboard.css';

export default function Dashboard() {
    const jwt = localStorage.getItem("authToken");
    if (!jwt) {
        return (
            <Container className="page-container">
                <Typography variant="h3" color="primary" className="login-head">
                    DASHBOARD
                </Typography>
                <br />
                <br />
                <Link to="/login" className="link">
                    <ActionButton variant="contained" color="primary" disableElevation>
                        Login
                    </ActionButton>
                </Link>
                <br />
                <br />
                <Link to="/signup" className="link">
                    <ActionButton variant="contained" color="primary" disableElevation>
                        Sign Up
                    </ActionButton>
                </Link>
            </Container>
        );
    }
    else {
        const userType = localStorage.getItem("userType");
        switch (userType) {
            case "A":
                return (
                    <Container className="page-container">
                        <Typography variant="h3" color="primary" className="login-head">
                            ADMIN DASHBOARD
                        </Typography>
                    </Container>
                )
            case "L":
                return (
                    <Container className="page-container">
                        <Typography variant="h3" color="primary" className="login-head">
                            LEADER DASHBOARD
                        </Typography>
                    </Container>
                )
            case "S":
                return (
                    <Container className="page-container">
                        <Typography variant="h3" color="primary" className="login-head">
                            SPECTATOR DASHBOARD
                        </Typography>
                    </Container>
                )
            default:
                return (
                    <Container className="page-container">
                        <Typography variant="h3" color="primary" className="login-head">
                            DASHBOARD
                        </Typography>
                        <br />
                        <br />
                        <Link to="/login" className="link">
                            <ActionButton variant="contained" color="primary" disableElevation>
                                Login
                            </ActionButton>
                        </Link>
                        <br />
                        <br />
                        <Link to="/signup" className="link">
                            <ActionButton variant="contained" color="primary" disableElevation>
                                Sign Up
                            </ActionButton>
                        </Link>
                    </Container>
                )
        }
    }

}