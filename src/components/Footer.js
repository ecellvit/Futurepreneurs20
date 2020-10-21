import React, { useContext, useEffect } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ActionButton from "./ActionButton";
import InfoContext from "../context/InfoContext";

function Footer() {
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
				<div className="nav-hello"><div>{teamCode}</div></div>
				{isLoggedIn ? <ActionButton onClick={logout} children="Log Out" /> : null}
			</Toolbar>
		</AppBar>
	);
}

export default Footer;
