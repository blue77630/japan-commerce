import { useNavigate } from "react-router-dom";

export default function JoinCardButton() {
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
            <strong>Join</strong>
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
                Explore Japan online
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}