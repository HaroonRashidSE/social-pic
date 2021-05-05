import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "../Pages/Welcome";
import Home from "../Pages/Home";
import Albums from "../Pages/Albums";
import Login from "../Pages/Login";
import Photos from "../Pages/Photos";
import "./styles/index.css";

function Index() {
  const text = "Welcome Page";

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default Index;
