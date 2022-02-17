import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/login";
import Admin from "./components/admin/admin";
import ProtectedRoute from "./components/protectedRoute";
import './custom.css';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </Router>
      </main> 
    </div>
  );
}

export default App;
