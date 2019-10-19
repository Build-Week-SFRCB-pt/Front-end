import { axiosWithAuth } from "../../utils/axiosWithAuth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FoodImg from "../FoodImg.js";

// *********** COMPONENT STYLING STARTS HERE ***********

const Container = styled.div`
  width: 100%;
  height 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const LogIn = styled.p`
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

const LogInContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
  height: 100vh;
  background: #db0000;
`;

const LogInFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  height: 30%;
  align-items: center;
`;

const LogInInput = styled.input`
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

const LogInButton = styled.button`
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

const NotMem = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
  font-family: "Open sans", sans-serif;
  font-size: 12px;
  color: white;
  margin: 0px;
  position: absolute;
  bottom: 7%;
  text-align: center;
`;

const Login = props => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    return setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", values)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/recipes");
        setValues({
          username: "",
          password: ""
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <LogInContainer className="reg-content">
        <LogIn>Welcome Back!</LogIn>
        <P>Find new recipes to try</P>
        <LogInFormStyle className="reg-form" onSubmit={handleSubmit}>
          <LogInInput
            className="reg-input"
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={values.username}
          />
          <LogInInput
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          <LogInButton type="submit">Log in!</LogInButton>
        </LogInFormStyle>
        <NotMem>
          Not a member? <StyledLink to="/">Sign Up</StyledLink>
        </NotMem>
      </LogInContainer>
      <FoodImg />
    </Container>
  );
};

export default Login;
