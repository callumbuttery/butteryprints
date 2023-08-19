import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { About } from './views/About'
import { Home } from './views/Home'
import { Prints } from './views/Prints'
import { Navbar } from "./components/Nav/Nav";
import { Footer } from "./components/Nav/Footer";

function App() {

  useEffect(() => {
    setTimeout(function () { AOS.init(); }, 1000);
  }, [])
  
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prints" element={<Prints />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
