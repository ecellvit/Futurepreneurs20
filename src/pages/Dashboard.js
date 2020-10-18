import { Typography, Container, Grid } from "@material-ui/core";
import React from "react";
import MenuBar from '../components/MenuBar';

import './Dashboard.css';

export default function Dashboard() {
    return (
        <Container className="page-container">
            <img src="future.png" width="400" className="future-logo" alt="Welcome to Quizzie"></img>
            <MenuBar />
        </Container >
    );
}