import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InterventionCard from "../components/InterventionCards";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

// save data from api call

// current user
const getCurrentUser = async (setInterventions) => {
  const token = localStorage.getItem("user"); // get token from local storage
  try {
    const res = await axios.get("/customers/current", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    console.log("respose:", res);
    setInterventions(res.data);
  } catch (error) {
    console.warn("[getInterventions] error:", error);
  }

  // get status for specifique intervention

  // get all building id or adress for specifique intervention
  // get baterry id for specifique intervention
  // if columns in intervention show column id
  // if elevator in intervention show elevator id
};
// go to intervention page

const go_to_intervention = (navigate) => {
  let path = `/InternventionsForm`;
  navigate(path);
};
// return to authentication page and erase local storage

const go_to_authentication = (navigate) => {
  let path = `/Authentication`;
  navigate(path);
  localStorage.removeItem("user");
};

function Home() {
  let navigate = useNavigate();
  const [interventions, setInterventions] = useState(null);

  useEffect(() => {
    console.log("Home mounted!");
    getCurrentUser(setInterventions);
  }, []);

  useEffect(() => {
    console.log("interventions changed:", interventions);
  }, [interventions]);

  return (
    <div className="flex-column">
      <Button
        className="align-self-end m-3"
        variant="danger"
        onClick={() => go_to_authentication(navigate)}
      >
        Log out
      </Button>
      <div className="top-section">
        <h2>Welcome to your Rockect Elevators Portail</h2>
        <div className="flex-row">
          <h4>Your interventions</h4>
          <button onClick={() => go_to_intervention(navigate)}>
            Create new intervention
          </button>
        </div>
      </div>
      <div className="border border-secondary">
        <h3>dsadfsdgfsfsdf</h3>
      </div>
    </div>
  );
}

export default Home;
