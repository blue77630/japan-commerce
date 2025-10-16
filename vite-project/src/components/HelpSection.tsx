import { useNavigate } from "react-router-dom";

export default function HelpSection() {
  const navigate = useNavigate();
  return (
    <button className="help-section" onClick={() => navigate('/help')} style={{cursor: "pointer"}}>
      <span className="help-icon">?</span>
      <span className="help-text">Help</span>
    </button>
  );
}