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
    return <option value={building.id}>{building.address}</option>;
  });
};

async function getBatteries(id, setBatteries) {
  const token = localStorage.getItem("user"); // get token from local storage
  try {
    const res = await axios.get("/buildings/" + id + "/batteries", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setBatteries(res.data);
    console.log("respone battery:", res.data);
  } catch (error) {
    console.warn("[getInterventions] error:", error);
  }
}

const BatteriesList = ({ batteries }) => {
  return batteries.map((batterie) => {
    return <option value={batterie.id}> Battery id: {batterie.id}</option>;
  });
};
///////////////////////////////////////////////////////////
function InternventionsForm() {
  const [buildings, setBuildings] = useState([]);
  const [building_id, setBuildingId] = useState(null);
  const [batteries, setBatteries] = useState([]);

  let navigate = useNavigate();

  //fetch data  on page load
  useEffect(() => {
    async function fetchData() {
      console.log("Form mounted!");
      await getCurrentUserBuildings(setBuildings);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("select option: ", building_id);
    async function fetchData() {
      setBatteries(getBatteries(building_id, setBatteries));
    }
    fetchData();
  }, [building_id]);
  console.log("test batteries: ", batteries);

  ///////////////////
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
        <Form.Select
          onChange={(e) => setBuildingId(e.target.value)}
          id="building_option"
          key={buildings.id}
          aria-label="Default select example"
        >
          <option>Select a building</option>
          {buildings.length > 0 && <BuildingsList buildings={buildings} />}
          {batteries.length > 0 && <BatteriesList batteries={batteries} />}
        </Form.Select>
      </div>
    </div>
  );
}

export default InternventionsForm;
