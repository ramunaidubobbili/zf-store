import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/login/login";
import Admin from "./components/admin/admin";
import ProtectedRoute from "./components/protectedRoute";
import './custom.css';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute path="/admin">
              <Admin />
            </ProtectedRoute>
            <Route exact path="/">
              <Redirect exact from="/" to="admin" />
            </Route>
            <Route path="*">
              <Redirect from="/" to="admin" />
            </Route>
          </Switch>
        </Router>
      </main> 
    </div>
  );
}

export default App;
