import React, { useState } from "react";
import styled from "styled-components";
import { primaryColor } from "../constants/colors";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  background-color: white;
  border-radius: 10px;
  transition: 500ms;
  &:hover {
    box-shadow: 5px -5px 10px #c0b6c8, -5px 5px 10px #fff6ff;
    cursor: pointer;
  }
  overflow: hidden;
`;

const Image = styled.img`
  border-radius: 10px;
  height: 200px;
`;

const Title = styled.h6`
  color: ${primaryColor};
  position: absolute;
  margin: 0px;
  background-color: rgba(300, 300, 300, 0.7);
  width: 200px;
  height: 200px;
  display: ${(props) => {
    return props.view ? "flex" : "none";
  }};
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border-radius: 10px;
  text-align: center;
`;

const PictureCard = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <MainContainer
      onClick={() => alert("abra-te sesamo")}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <Image src={props.img} />
      <Title view={hover}>{props.title}</Title>
    </MainContainer>
  );
};

export default PictureCard;
