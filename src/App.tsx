import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { About } from './views/About'
import { Home } from './views/Home'
import { PortfolioHome } from './views/portfolios/PortfolioHome'
import { PortfolioWildlife } from "./views/portfolios/PortfolioWildlife";
import { PortfolioLandscape } from "./views/portfolios/PortfolioLandscapes";

import { Lockscreen } from "./views/Lockscreen";

import { Prints } from './views/Prints'
import { Navbar } from "./components/Nav/Nav";
import { Footer } from "./components/Nav/Footer";
import { ScrollToTop } from "./components/Nav/ScrollToTop";

function App() {

  useEffect(() => {
    setTimeout(function () { AOS.init(); }, 1000);
  }, [])

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Lockscreen />} />
          <Route path="/about" element={<Lockscreen />} />
          <Route path="/portfolio" element={<Lockscreen />} />
          <Route path="/portfolio/wildlife" element={<Lockscreen />} />
          <Route path="/portfolio/landscapes" element={<Lockscreen />} />
          <Route path="/prints" element={<Lockscreen />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
