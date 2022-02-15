import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Admin from "./components/admin/admin";
import './custom.css';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="admin" element={ <Admin/> } />
          </Routes>
        </main> 
      </Router>
    </div>
  );
}

export default App;
