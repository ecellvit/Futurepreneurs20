import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amenities from './pages/Amenities';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/amenities" component={Amenities}/>
        <Route path="*" component={ErrorPage}/>
      </Switch>
    </Router>
  );
}

export default App;