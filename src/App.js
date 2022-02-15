import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header';
import Home from "./components/home";
import Profile from './components/profile/profile';
import Cart from "./components/cart/cart";
import Wishlist from "./components/wishlist/wishlist";
import Admin from "./components/admin/admin";
import './custom.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={ <Admin/> } />
            <Route path="profile" element={ <Profile/> } />
            <Route path="wishlist" element={ <Wishlist/> } />
            <Route path="cart" element={ <Cart/> } />
          </Routes>
        </main> 
      </Router>
    </div>
  );
}

export default App;
