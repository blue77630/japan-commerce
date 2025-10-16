import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import React, { useEffect, useState } from 'react';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import Help from './pages/Help';
import AnimeLoader from './components/AnimeLoader';
import HelpSection from './components/HelpSection';
import Arrow from './components/Arrow';
import CarouselCards from './components/CarouselCards';

function Join() {
  return (
    <div className="japan-bg">
      <HelpSection />
      <div className="join-card">
        <h2
          className="japan-title dream-hover"
          style={{
            position: "relative",
            cursor: "pointer",
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "'Noto Sans JP', 'Inter', Arial, sans-serif",
            fontSize: "2.2rem",
            letterSpacing: "2px",
            marginBottom: "0.5rem",
            textShadow: `
              0 2px 8px #e63946cc,
              0 6px 24px #000a,
              0 1px 0 #fff,
              2px 2px 0 #e63946
            `
          }}
        >
          ようこそ !
          <span className="dream-message">Bienvenue&nbsp;!</span>
        </h2>
        <h1
          style={{
            color: "#eee4df",
            fontWeight: "900",
            fontSize: "3rem",
            letterSpacing: "2px",
            textShadow: `
              0 2px 12px #ff7f2acc,
              0 6px 24px #000a,
              0 3px 0 #fff,
              2px 2px 0 #ff7f2a
            `,
            fontFamily: "'Inter', 'Arial Black', Arial, sans-serif",
            marginBottom: "1.2rem"
          }}
        >
          SoraNara
        </h1>
        <CarouselCards />
      </div>
    </div>
  )
}

function App(){
  return (
    <>
      <AnimeLoader />
      <Router>
         <Routes>
            <Route path="/" element = {<Join />}></Route>
            <Route path="/home" element = {<Home />}></Route>
            <Route path="/inscription" element = {<Inscription />}></Route>
            <Route path="/connexion" element = {<Connexion />}></Route>
            <Route path="/help" element={<Help />}></Route>
         </Routes>
      </Router>
    </>
  )
}

export default App