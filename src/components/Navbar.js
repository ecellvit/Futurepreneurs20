import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./Navbar.css";
import { Link, Redirect } from "react-router-dom";
import ActionButton from "./ActionButton";

function Navbar() {
	const logout = () => {
		localStorage.removeItem("authToken");
		localStorage.removeItem("userType");
		window.location.reload();
	}
	return (
		<AppBar position="static" className="navbar" elevation={0}>
			<Toolbar className="nav-toolbar">
				<Link to="/" className="nav-links">
					<img
						src="./favicon1.png"
						alt="brand logo"
						className="nav-logo"
					/>
					<div className="nav-text"><div>FUTUREP<span>₹</span>ENEURS</div></div>
				</Link>
				{localStorage.getItem("authToken") ? <ActionButton className="nav-btn" onClick={logout}>Log Out</ActionButton> : <></>}
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
