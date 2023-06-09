import React, { useState } from "react";
import { Button, Error, Input, FormField, Label, Textarea } from "../styles";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  // const [icon, setIcon] = useState("");
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(null);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      
        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  // const handleIconChange = (event) => {
  //   setIcon(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      {/* <FormField>
    <Label htmlFor="icon">Icon</Label>
    <select id="icon" value={icon} onChange={handleIconChange}>
    <option value={icon}>Select an icon</option>
    <option value={icon}>🐧</option>
    <option value={icon}>🐳</option>
    <option value={icon}>🦩</option>
    <option value={icon}>🦄</option>
    <option value={icon}>🦥</option>
    </select>
    </FormField> */}
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        <Error>{errors}</Error>
      </FormField>
    </form>
  );
}

export default SignUpForm;
