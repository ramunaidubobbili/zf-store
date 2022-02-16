import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/home";
import Admin from "./components/admin/admin";
import './custom.css';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/admin/*" element={<Admin />} />
          </Route>
        </Routes>
      </main> 
    </div>
  );
}

export default App;
