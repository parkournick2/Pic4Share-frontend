import React, { useState } from "react";
import styled from "styled-components";
import { primaryColor } from "../constants/colors";
import PopPop from "react-poppop";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  :hover{
    p{
      height: 35px;
      color: ${primaryColor};
      border-bottom: 1px solid ${primaryColor}
    }
  }
`;
const TinyImg = styled.img`
`;
const TinyTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 250ms;
  height: 30px;
  margin: 0px;
  background-color: white;
`;

const PictureCard = (props) => {
  const [modal, setModal] = useState(false);
  const [hover, setHover] = useState(false);
  const picture = props.picture;

  return (
    <>
      <PopPop
        contentStyle={{ overflow: "hidden" }}
        position="centerCenter"
        open={modal}
        onClose={() => {
          document.body.style.overflow = "auto";
          setModal(false);
        }}
        closeOnEsc={true}
      >
        amo a janis
      </PopPop>
      <MainContainer  onClick={() => setModal(true)}>
        <TinyImg src={picture.url} />
        <TinyTitle>{picture.title}</TinyTitle>
      </MainContainer>
    </>
  );
};

export default PictureCard;
