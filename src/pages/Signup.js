import {
    Container,
    Typography,
    InputAdornment,
    IconButton,
    CircularProgress,
  } from "@material-ui/core";
  import React, { useState } from "react";
  import { Link, Redirect } from "react-router-dom";
  import TextInput from "../components/TextInput";
  // import Navbar from "../components/Navbar/Navbar";
  import "./Login.css";
  import { Visibility, VisibilityOff } from "@material-ui/icons";
  import ActionButton from "../components/ActionButton";
  import axios from "axios";
  
  function LoginPage() {
    const [TCode, changeTCode] = useState("");
    const [TName, changeTName] = useState("");
    const [LPass, changeLPass] = useState("");
    const [SPass, changeSPass] = useState("");

    const [user, changeUser] = useState("");
    const [password, changePassword] = useState("");
   
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
  
    const [errorText, setErrorText] = useState(
      "Error Logging In! Try again...."
    );
  
    const [redirect, setRedirect] = useState(false);
    const [ownerRedirect, setOwnerRedirect] = useState(false);
    const [loginRedirect, setLoginRedirect] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const backend = "https://fp20.herokuapp.com"
    
    const handleTNameChange = (event) => {
      changeTName(event.target.value);
    };
    
    const handleTCodeChange = (event) => {
      changeTcode(event.target.value);
    };

    const handleLPassChange = (event) => {
      changeLPass(event.target.value);
    };

    const handleSPassChange = (event) => {
      changeSPass(event.target.value);
    };
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    const keyPress = (event) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    };
  
    const handleSubmit = async () => {
      const url = `${backend}/team/login`;
      setLoading(true);
      const data = {
        code,
        password,
      };
      console.log(url,data);
      try {
        await axios.post(url, data)
         .then((res) => 
         {console.log(res);
          if(res.status==200){
          localStorage.setItem("authToken", res.data.token);
          localStorage.setItem("userType", res.data.teamDetails.userType);
          setLoading(false);
          setSuccess(true);
        }});
      } catch (error) {
        console.log(error);
        changePassword("");
        setLoading(false);
      }
    };

    if (success) 
    {
      return <Redirect to="/dashboard"/>;
    }
  
    return (
      <>
        <Container className="page-container">
          <Typography variant="h3" color="primary" className="login-head">
            Signup
          </Typography>
          <form className="form">
            <TextInput
              id="TName"
              label="Team Name"
              type="text"
              className="form-input"
              variant="outlined"
              value={TName}
              onChange={handleTNameChange}
            ></TextInput>
            <br/>
            <TextInput
              id="TCode"
              label="Team Code"
              type="text"
              className="form-input"
              variant="outlined"
              value={TCode}
              onChange={handleTCodeChange}
            ></TextInput>
            <br/>
            <TextInput
              id="LPass"
              label="Leader Password"
              type="text"
              className="form-input"
              variant="outlined"
              value={LPass}
              onChange={handleLPassChange}
            ></TextInput>
            <br/>
            <TextInput
              id="SPass"
              type={showPassword ? "text" : "password"}
              label="Spectator Password"
              className="form-input"
              variant="outlined"
              value={SPass}
              onChange={handleSPassChange}
              onKeyPress={keyPress}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="show password"
                      onClick={togglePasswordVisibility}
                      edge="end"
                      className="view-pass-icon"
                    >
                      {showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextInput>
          </form>
          <br />
          <div className="login-btn-div">
            <ActionButton
              className="login-btn"
              onClick={handleSubmit}
              disabled={isLoading ? true : false}
            >
              {!isLoading ? (
                "signup"
              ) : (
                <CircularProgress
                  color="secondary"
                  size={20}
                  thickness={5}
                />
              )}
            </ActionButton>
          </div>
        </Container>
      </>
    );
  }
  
  export default LoginPage;