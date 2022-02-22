import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header';
import Login from "./components/login/login"
import Home from "./components/home";
import Profile from './components/profile/profile';
import Cart from "./components/cart/cart";
import Wishlist from "./components/wishlist/wishlist";
import './custom.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/wishlist">
              <Wishlist/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
          </Switch>
        </main> 
      </Router>
    </div>
  );
}

export default App;
