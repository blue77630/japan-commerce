import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import React, { useEffect, useState } from 'react';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import Help from './pages/Help';

function AnimeLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="anime-loader-bg">
      <div className="anime-loader-message">Loading...</div>
      <div className="anime-loader-bar">
        <div className="anime-loader-bar-progress"></div>
      </div>
    </div>
  );
}

function HelpSection() {
  const navigate = useNavigate();
  return (
    <button className="help-section" onClick={() => navigate('/help')} style={{cursor: "pointer"}}>
      <span className="help-icon">?</span>
      <span className="help-text">Help</span>
    </button>
  );
}

function JoinCardButton() {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate('/home')} style={{cursor: "pointer"}}>
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img
              src="./poisson.webp"
              alt="Livre Manga"
              style={{ width: "80px", height: "80px"}}
            />
            <strong>Rejoindre</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="front-content">
            <small className="badge">Japan</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>Japan e-Commerce</strong>
                </p>
                <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlns="http://www.w3.org/2000/svg"><g style={{mixBlendMode: "normal"}}><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z" fill="#20c997"></path></g></g></svg>
              </div>
              <p className="card-footer">
                Explorez le Japon en ligne
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow({ direction, onClick }: { direction: "left" | "right"; onClick?: () => void }) {
  return (
    <button
      className={`carousel-arrow carousel-arrow--${direction}`}
      onClick={onClick}
      aria-label={direction === "left" ? "Précédent" : "Suivant"}
      tabIndex={0}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}

const cards = [
  {
    key: "inscription",
    title: "Inscription",
    description: "Crée ton compte et rejoins l’aventure !",
    badge: "Nouveau",
    icon: "/inscription.png",
  },
  {
    key: "join",
    title: "Rejoindre",
    description: "Explorez le Japon en ligne",
    badge: "Japan",
    icon: "./poisson.webp",
  },
  {
    key: "connexion",
    title: "Connexion",
    description: "Connecte-toi pour accéder à ton espace.",
    badge: "Déjà membre",
    icon: "/connexion.png",
  },
];

function CarouselCards() {
  const [activeIdx, setActiveIdx] = useState(1);
  const [animDir, setAnimDir] = useState<"left" | "right" | "">("");
  const navigate = useNavigate();

  function handleSwipe(dir: "left" | "right") {
    if ((dir === "left" && activeIdx === 0) || (dir === "right" && activeIdx === cards.length - 1) || animDir) return;
    setAnimDir(dir);
    setTimeout(() => {
      setActiveIdx((idx) =>
        dir === "left"
          ? Math.max(0, idx - 1)
          : Math.min(cards.length - 1, idx + 1)
      );
      setAnimDir("");
    }, 250);
  }

  const card = cards[activeIdx];
  const leftCard = activeIdx > 0 ? cards[activeIdx - 1] : null;
  const rightCard = activeIdx < cards.length - 1 ? cards[activeIdx + 1] : null;

  return (
    <div className="carousel-cards-stack">
      <button
        className="carousel-arrow carousel-arrow--left"
        tabIndex={0}
        onClick={() => handleSwipe("left")}
        disabled={activeIdx === 0 || animDir !== ""}
        aria-label="Précédent"
      >◀</button>
      {/* Carte gauche */}
      {leftCard && (
          <div
            className="carousel-card carousel-card--left"
            onClick={() => navigate('/inscription')}
            style={{cursor: "pointer"}}>
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <img src={leftCard.icon} alt={leftCard.title} style={{ width: "80px", height: "80px"}} />
                  <strong>{leftCard.title}</strong>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle"></div>
                  <div className="circle" id="right"></div>
                  <div className="circle" id="bottom"></div>
                </div>
                <div className="front-content">
                  <small className="badge">{leftCard.badge}</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>{leftCard.title}</strong>
                      </p>
                    </div>
                    <p className="card-footer">{leftCard.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Carte centrale */}
  <div className={`carousel-card carousel-card--center${animDir ? ` swipe-${animDir}` : ""}`}
        onClick={() => {
        if (card.key === "inscription") navigate('/inscription');
        if (card.key === "connexion") navigate('/connexion');
      }}
      style={{ cursor: card.key === "inscription" || card.key === "connexion" ? "pointer" : "default" }}
      >
      {activeIdx === 1 ? (
    <JoinCardButton />
        ) : (
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <img src={card.icon} alt={card.title} style={{ width: "80px", height: "80px"}} />
                  <strong>{card.title}</strong>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle"></div>
                  <div className="circle" id="right"></div>
                  <div className="circle" id="bottom"></div>
                </div>
                <div className="front-content">
                  <small className="badge">{card.badge}</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>{card.title}</strong>
                      </p>
                    </div>
                    <p className="card-footer">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Carte droite */}
      {rightCard && (
          <div
            className="carousel-card carousel-card--right"
            onClick={() => navigate('/connexion')}
            style={{cursor: "pointer"}}>
          <div className="card">
            <div className="content">
              <div className="back">
                <div className="back-content">
                  <img src={rightCard.icon} alt={rightCard.title} style={{ width: "80px", height: "80px"}} />
                  <strong>{rightCard.title}</strong>
                </div>
              </div>
              <div className="front">
                <div className="img">
                  <div className="circle"></div>
                  <div className="circle" id="right"></div>
                  <div className="circle" id="bottom"></div>
                </div>
                <div className="front-content">
                  <small className="badge">{rightCard.badge}</small>
                  <div className="description">
                    <div className="title">
                      <p className="title">
                        <strong>{rightCard.title}</strong>
                      </p>
                    </div>
                    <p className="card-footer">{rightCard.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className="carousel-arrow carousel-arrow--right"
        tabIndex={0}
        onClick={() => handleSwipe("right")}
        disabled={activeIdx === cards.length - 1 || animDir !== ""}
        aria-label="Suivant"
      >▶</button>
    </div>
  );
}


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