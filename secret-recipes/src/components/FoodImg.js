import React from "react";
import BbqImg from "./BbqImg.jpg";
import styled from "styled-components";

const BgImg = styled.div`
  position: relative;
  display: block;
  width: 50%;
  height: 100%;
  z-index: 10;
  background-image: url(${BbqImg});
  background-position: 235% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  width: 50%;
  height: 100%;
  z-index: 11;
  background: black;
  position: fixed;
  opacity: 0.13;
`;

const FoodImg = props => {
  return (
    <BgImg>
      <Overlay></Overlay>
    </BgImg>
  );
};

export default FoodImg;
