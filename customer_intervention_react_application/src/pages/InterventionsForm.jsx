import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css"; // use home css for one class top section
import Form from "react-bootstrap/Form";

function InternventionsForm() {
  let navigate = useNavigate();

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
        </Form.Select>
      </div>
    </div>
  );
}

export default InternventionsForm;
