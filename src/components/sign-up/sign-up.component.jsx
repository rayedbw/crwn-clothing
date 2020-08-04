import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button-component";
import { auth, createUserProfile } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const INITIAL_STATE = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const useSignUpInput = () => {
  const [formInputs, setFormInputs] = useState(INITIAL_STATE);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = formInputs;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfile(user, { displayName });

      setFormInputs(INITIAL_STATE);
    } catch (error) {
      alert("Failed to Sign Up with email and password");
      console.log(error.message);
    }
  };

  return [formInputs, handleChange, handleSubmit];
};

const SignUp = () => {
  const [formInputs, handleChange, handleSubmit] = useSignUpInput();
  const { displayName, email, password, confirmPassword } = formInputs;

  return (
    <div className="sign-up">
      <h1>I do not have an account</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          required
          label="Display Name"
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
          label="Confirm Password"
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
