import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InterventionCard from "../components/InterventionCards";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Home() {
  let navigate = useNavigate();
  const go_to_intervention = () => {
    let path = `/InternventionsForm`;
    navigate(path);
  };
  // return to authentication page and erase local storage
  const go_to_authentication = () => {
    let path = `/Authentication`;
    navigate(path);
    localStorage.removeItem("user");
  };

  return (
    <div className="flex-column">
      <Button
        className="align-self-end m-3"
        variant="danger"
        onClick={go_to_authentication}
      >
        Log out
      </Button>
      <div className="top-section">
        <h2>Welcome to your Rockect Elevators Portail</h2>
        <div className="flex-row">
          <h4>Your interventions</h4>
          <button onClick={go_to_intervention}>Create new intervention</button>
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
