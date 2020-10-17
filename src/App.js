import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InfoContext from "./context/InfoContext";
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Amenities from './pages/Amenities';
import ErrorPage from './pages/ErrorPage';


function App() {
  const [authToken, setAuthToken] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [teamCode, setTeamCode] = useState(null);
  const [userType, setUserType] = useState(null);

  let info = {
    authToken,
    setAuthToken,
    isLoggedIn,
    setLoggedIn,
    teamCode,
    setTeamCode,
    userType,
    setUserType
  };

  return (
    <InfoContext.Provider value={info}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/amenities" component={Amenities} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </InfoContext.Provider>
  );
}

export default App;