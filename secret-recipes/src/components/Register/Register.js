import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  border-bottom: 2px solid black;
  background: none;
  outline: none;
  &::placeholder {
       color: white;

  ${props =>
    props.type == "text"
      ? `
      :-internal-autofill-selected {
        background-color: rgb(232, 240, 254, 0) !important;
        background-image: none !important;
        color: rgb(0, 0, 0) !important;
      }

    `
      : null}
`;

const RegButton = styled.button`
  width: 25%;
  font-size: 17px;
  border: none;
  border-radius: 10px;
  background: white;
  color: red;
  padding 10px
`;

const StyledLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
  font-family: "Open sans", sans-serif;
  font-size: 15px;
  color: white;
  margin: 0px;
`;

const TermsStyle = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
  font-family: "Open sans", sans-serif;
  font-size: 12px;
  color: white;
  margin: 0px;
  position: absolute;
  bottom: 7%;
  text-align: center;
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
        props.history.push("/login");
        setValues({
          username: "",
          password: ""
        });
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
      <TermsStyle>
        By continuing, you agree to Terms of Service, Privacy Policy <br />{" "}
        Already a member? <StyledLink to="/login">Log in</StyledLink>
      </TermsStyle>
    </RegContainer>
  );
};

export default Register;
