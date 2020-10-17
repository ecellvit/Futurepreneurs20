import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Amenities from './pages/Amenities';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login}/>
        {/* <Route exact path="/signup" component={Signup}/>
        <Route exact path="/amenities" component={Amenities}/> */}
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;