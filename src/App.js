import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/login/Register";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <ProtectedRoute path="/home">
              <Home />
            </ProtectedRoute>
            <Route exact path="/">
              <Redirect exact from="/" to="home" />
            </Route>
            <Route path="*">
              <Redirect from="/" to="home" />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  )
}

export default App
