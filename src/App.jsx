import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./assets/components/Button";
import Home from "./assets/pages/Home";
import PlayedGames from "./assets/pages/PlayedGames";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <div>
            <div className="logo">Agha, XI RPL A</div>
            <div className="menu">
              <Link to="/">
                <Button text="Home" />
              </Link>
              <Link to="/played-games">
                <Button text="Played Games" />
              </Link>
            </div>
          </div>
          <div className="sidebar-footer">
            8/18/2025
            <br />
            Malang, Indonesia
          </div>
        </div>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/played-games" element={<PlayedGames />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
