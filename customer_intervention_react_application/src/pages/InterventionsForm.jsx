import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css"; // use home css for one class top section
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";

// return to authentication page and erase local storage

const go_to_authentication = (navigate) => {
  let path = `/Authentication`;
  navigate(path);
  localStorage.removeItem("user");
  localStorage.removeItem("user_id");
};

// go to home page
const go_to_home = (navigate) => {
  let path = `/Home`;
  navigate(path);
};

// current user building
const getCurrentUserBuildings = async (setBuildings) => {
  const token = localStorage.getItem("user"); // get token from local storage
  try {
    const res = await axios.get("/buildings/current", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setBuildings(res.data);

    console.log("respone:", res.data);
  } catch (error) {
    console.warn("[getInterventions] error:", error);
  }
};

const BuildingsList = ({ buildings }) => {
  return buildings.map((building) => {
    return <option key={building.id}>{building.address}</option>;
  });
};

function InternventionsForm() {
  const [buildings, setBuildings] = useState([]);
  const [building_id, setCurrentUserBuildingId] = useState(null);

  let navigate = useNavigate();

  //fetch data  on page load
  useEffect(() => {
    async function fetchData() {
      console.log("Form mounted!");
      await getCurrentUserBuildings(setBuildings);
    }
    fetchData();
  }, []);

  return (
    <div className="flex-column">
      <div className="flex-row align-self-end">
        <Button
          className="align-self-end m-3"
          variant="primary"
          onClick={() => go_to_home(navigate)}
        >
          Return Back
        </Button>
        <Button
          className="align-self-end m-3"
          variant="danger"
          onClick={() => go_to_authentication(navigate)}
        >
          Log out
        </Button>
      </div>
      <div className="top-section"></div>
      <h1>Request for intervention </h1>
      <div className="m-3">
        <Form.Select aria-label="Default select example">
          <option>Select a building</option>
          {buildings.length > 0 && <BuildingsList buildings={buildings} />}
        </Form.Select>
      </div>
    </div>
  );
}

export default InternventionsForm;
