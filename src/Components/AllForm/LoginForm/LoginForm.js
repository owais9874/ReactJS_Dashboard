import React, { useState } from "react";

import "./LoginForm.css";

import { Form } from "react-bootstrap";

import { Button } from "react-bootstrap";

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main class="page-content app-main">
      <div className="Login">
        <Form onSubmit={handleSubmit} className="login">
          <h2 className="text-center">Login</h2>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>

            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>

        {/* <Form>
        <h2 className="text-center">Registration</h2>
        <Form.Group size="lg" controlId="txt">
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="First name" />
        </Form.Group>

        <Form.Group size="lg" controlId="txt">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone" />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
      </div>
    </main>
  );
};

export default LoginForm;
