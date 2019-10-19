import React from "react";
import styled from "styled-components";
import FoodImg from "./FoodImg.js";
import Register from "./Register/Register.js";

const Container = styled.div`
  width: 100%;
  height 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center
  align-items: center;
  align-content: center;
`;

const FormsContainer = styled.div`
  width: 100%;
  height 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const LaunchPage = props => {
  return (
    <Container className="LaunchPage">
      <FormsContainer className="Reg-Form-container">
        <Register />
        <FoodImg />
      </FormsContainer>
    </Container>
  );
};

export default LaunchPage;
