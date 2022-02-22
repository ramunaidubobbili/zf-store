import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Login from "./components/login/login";
import Register from "./components/login/register";
import Dashboard from "./components/dashboard";
import ProtectedRoute from "./components/login/protectedRoute";
import './custom.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <Route exact path="/">
            <Redirect exact from="/" to="dashboard" />
          </Route>
          <Route path="*">
            <Redirect from="/" to="dashboard" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
