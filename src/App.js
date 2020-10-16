import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Amenities from './pages/Amenities';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/amenities" component={Amenities}/>
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}





export default App;