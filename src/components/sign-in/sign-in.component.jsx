import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button-component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

const useSignInInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  return [email, password, handleChange, handleSubmit];
};

const SignIn = () => {
  const [email, password, handleChange, handleSubmit] = useSignInInput();

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
