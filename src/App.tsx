import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About } from './views/About'
import { Home } from './views/Home'
import { Prints } from './views/Prints'
import { Navbar } from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prints" element={<Prints />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
