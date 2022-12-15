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
    setInterventions(res.data.interventions);
    console.log("respose:", res);
  } catch (error) {
    console.warn("[getInterventions] error:", error);
  }
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
  const [interventions, setInterventions] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      console.log("Home mounted!");
      await getCurrentUser(setInterventions);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("interventions test:", interventions);
    console.log("interventions changed:", interventions);
  }, [interventions]);


  const listInterventions = interventions.map((intervention) => {
    if (typeof intervention.building == "number") { // it the intervention is only in the battery with type number
      return  <li>
   Intervention ID:{intervention.id} Result: {intervention.result} Building ID: {intervention.building}
    </li>
    }
    else {
 return   <li>
 Intervention ID:{intervention.id} Result: {intervention.result} Building ID: {intervention.building.id}

</li>

  
  }
  // else if (typeof intervention.battery == "number" && typeof intervention.battery) {
  //   <li>
  //   Intervention ID:{intervention.id} Result: {intervention.result} Building ID: {intervention.building} 
  // </li>
  // }
  })





  // const listInterventions = interventions.map((intervention) => (
  //   <li>
  //     {intervention.id} sdds {intervention.id}
  //   </li>
  // ));

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
        <ul>{listInterventions}</ul>
      </div>
    </div>
  );
}

export default Home;
