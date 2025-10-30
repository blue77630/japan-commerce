import { useState } from "react";
import { useNavigate } from "react-router-dom";
import JoinCardButton from "./JoinCardButton";

const cards = [
  {
    key: "inscription",
    title: "Register",
    description: "Create your account and join the adventure!",
    badge: "Nouveau",
    icon: "/inscription.png",
  },
  {
    key: "join",
    title: "Login",
    description: "Explore Japan online",
    badge: "Japan",
    icon: "./poisson.webp",
  },
  {
    key: "connexion",
    title: "Login",
    description: "Connect to access your space.",
    badge: "Already a member",
    icon: "/connexion.png",
  },
];

export default function CarouselCards() {
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
        className="carousel-arrow carousel-arrow--left loading-button"
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
        className="carousel-arrow carousel-arrow--right loading-button"
        tabIndex={0}
        onClick={() => handleSwipe("right")}
        disabled={activeIdx === cards.length - 1 || animDir !== ""}
        aria-label="Suivant"
      >▶</button>
    </div>
  );
}