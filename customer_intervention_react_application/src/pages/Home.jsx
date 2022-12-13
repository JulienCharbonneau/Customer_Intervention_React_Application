import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InterventionCard from "../components/InterventionCards";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/InternventionsForm`;
    navigate(path);
  };

  return (
    <div className="flex-column">
      <div className="top-section">
        <h2>Welcome to your Rockect Elevators Portail</h2>
        <div className="flex-row">
          <h4>Your interventions</h4>
          <button onClick={routeChange}>Create new intervention</button>
        </div>
      </div>
      <div className="InterventionCard">
        <InterventionCard />
        <InterventionCard />
        <InterventionCard />
        <InterventionCard />
      </div>
    </div>
  );
}

export default Home;
