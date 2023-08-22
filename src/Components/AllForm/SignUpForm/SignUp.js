import React, { useState } from "react";

import { Form } from "react-bootstrap";

import { Button } from "react-bootstrap";

const SignUp = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onVerifyNewPassword = () => {
    if (password !== confirmPassword) {
      console.log("The passwords dont match");
      return;
    } else {
      console.log("Ok.");
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main class="page-content app-main">
      <div className="Login signUp">
        <Form onSubmit={handleSubmit}>
          <h2 className="text-center">Registration</h2>
          <Form.Group size="lg" controlId="txt">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              placeholder="First name"
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="txt">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              placeholder="Last name"
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={onVerifyNewPassword}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={onVerifyNewPassword}
            />
          </Form.Group>

          <Form.Group controlId="City">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="Select City" />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Phone" />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" required label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default SignUp;
