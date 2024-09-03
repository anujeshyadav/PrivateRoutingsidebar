// import React from "react";

// function SignupPage() {
//   return <div>signuppage</div>;
// }

// export default SignupPage;
import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
function Login() {
  return (
    <div style={{ backgroundColor: "blue", height: "100Vh" }}>
      <h2 style={{ color: "white" }}>Signup page</h2>
      <hr />
      <div className="container" style={{ padding: "2px 2px 3px" }}>
        <Card>
          <CardBody>
            <CardHeader>Login screen</CardHeader>

            <Link style={{ color: "black" }} to="/login">
              Login
            </Link>
            <hr />
            <Link style={{ color: "black" }} to="/homw">
              Signup
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Login;
