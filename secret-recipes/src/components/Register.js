import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

// *********** COMPONENT STYLING STARTS HERE ***********

const SignUp = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Oswald:600&display=swap");
  font-family: "Oswald", sans-serif;
  font-size: 70px;
  font-weight: 600;
  color: white;
  margin: 10px;
`;

const P = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
  font-family: "Open sans", sans-serif;
  font-size: 15px;
  color: white;
  margin: 0px;
`;

const RegContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
  height: 100%;
  background: #db0000;
`;

const RegFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  height: 30%;
  align-items: center;
`;

const RegInput = styled.input`
  height: 20%;
  width: 50%;
  border: none;
  padding: 10px;
  border-radius: 12px;
`;

const RegButton = styled.button`
  width: 25%;
  font-size: 20px;
  border: none;
  background: none;
  color: white;
`;

// *********** COMPONENT STYLING ENDS HERE ***********

const Register = props => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    return setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: values.username,
      password: values.password
    };
    axiosWithAuth()
      .post("/auth/register", newUser)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        //redirect to login page to login
      })
      .catch(err => console.log(err));
  };

  return (
    <RegContainer className="reg-content">
      <SignUp>Sign Up</SignUp>
      <P>Find new recipes to try</P>
      <RegFormStyle className="reg-form" onSubmit={handleSubmit}>
        <RegInput
          className="reg-input"
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={values.username}
        />
        <RegInput
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <RegButton type="submit">Sign Up!</RegButton>
      </RegFormStyle>
      <p>Already a member? Log in</p>
    </RegContainer>
  );
};

export default Register;
