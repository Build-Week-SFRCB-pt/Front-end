import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//import Register from "./Register/Register.js";

const Container = styled.div`
  width: 100%;
  height 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center
  align-items: center;
  align-content: center;
  background: #db0000;
`;

const FormsContainer = styled.div`
  width: 100%;
  height 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 100%;
  font-size: 17px;
  border: none;
  border-radius: 10px;
  background: white;
  color: red;
  padding 10px;
  outline: none;
  &:hover {
    background: #EFEFEF
  }
  margin: 20px;
`;

const LinkContainer = styled(Link)`
  width: 25%;
`;

const SFStyle = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Dancing+Script&display=swap");
  font-family: "Dancing Script", cursive;
  font-size: 40px;
  font-weight: 600;
  color: white;
  margin-bottom: 10px;
  line-height: 50px;
`;

const CBStyle = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Lato:700&display=swap");
  font-family: "lato", sans-serif;
  font-size: 90px;
  font-weight: 600;
  color: white;
  margin: 0;
  line-height: 50px;
`;

const LaunchPage = props => {
  return (
    <Container className="LaunchPage">
      <TextContainer>
        <SFStyle>Secret Family</SFStyle>
        <CBStyle>CookBook</CBStyle>
      </TextContainer>
      <FormsContainer className="Reg-Form-container">
        <LinkContainer to="/Register">
          <Button> Sign Up</Button>
        </LinkContainer>
        <LinkContainer to="/login">
          <Button>Login</Button>
        </LinkContainer>
      </FormsContainer>
    </Container>
  );
};

export default LaunchPage;
