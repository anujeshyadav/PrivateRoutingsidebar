import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
function Login() {
  return (
    <div style={{ backgroundColor: "green", height: "100Vh" }}>
      <h2 style={{ color: "white" }}>Entery Page</h2>
      <hr />
      <div className="container" style={{ padding: "2px 2px 3px" }}>
        <Card>
          <CardBody>
            <CardHeader>Login screen</CardHeader>

            <Link style={{ color: "black" }} to="/home">
              Login
            </Link>
            <hr />
            <Link style={{ color: "black" }} to="/signup">
              Signup
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Login;
