import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route path={"/login"}>
              <Login/>
            </Route>
            <ProtectedRoute path="/">
              <Home />
            </ProtectedRoute>
            <Route exact path="/">
              <Redirect exact from="/" to="users" />
            </Route>
            <Route path="*">
              <Redirect from="/" to="users" />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  )
}

export default App
