import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Authentication() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Home`;
    navigate(path);
  };

  return (
    <div
      style={{ padding: "100px" }}
      className="d-flex flex-column align-items-center"
    >
      <h4 style={{ padding: "50px" }}>
        Please sign-in to your Rocket Elevators account.
      </h4>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={routeChange}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Authentication;
