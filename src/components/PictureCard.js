import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 200px;
  width: 200px;
  background-color: white;
  border-radius: 10px;
  transition: 500ms;
  &:hover {
    box-shadow: 5px -5px 10px #c0b6c8, -5px 5px 10px #fff6ff;
  }
`;

const PictureCard = () => {
  return <MainContainer></MainContainer>;
};

export default PictureCard;
