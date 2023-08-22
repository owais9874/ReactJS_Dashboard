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
      </div>
    </main>
  );
};

export default LoginForm;
