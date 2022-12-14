import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InterventionCard from "../components/InterventionCards";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";


function Home() {
  // save data from api call

  const token = localStorage.getItem("user"); // get token from local storage
  console.log("token: ", token)
  // current user
  const [interventions, setInterventions] = useState([]);
  
 const getInterventions = axios({
    method: "get",
    url: "/customers/current",
    headers: {
      Authorization: 'Bearer ' + token,
    }
  }).then((response) => {
    console.log("this is the response: ", response)
  }).catch(function (error) {
    console.log(error)
  })
  // all internvetion by id for specifique user
  // get status for specifique intervention
  // get all building id or adress for specifique intervention
  // get baterry id for specifique intervention
  // if columns in intervention show column id
  // if elevator in intervention show elevator id

  // go to intervention page
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
