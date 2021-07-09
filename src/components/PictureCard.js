import React, { useState } from "react";
import styled from "styled-components";
import { primaryColor } from "../constants/colors";
import SkyLight from "react-skylight";

const MainContainer = styled.div`
  margin: 50px;
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

const TinyImage = styled.img`
  border-radius: 10px;
  height: 200px;
`;

const RealImage = styled.img``;

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


const dialogStyle = {
  width: "80vw",
  height: "80vh",
  alignSelf: 'center',
  marginTop: "-40vh",
  marginLeft: "-40vw",
  overflowY: 'scroll',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
};

const PictureCard = (props) => {
  const [hover, setHover] = useState(false);
  let simpleDialog;

  return (
    <>
      <MainContainer
        onClick={() => simpleDialog.show()}
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      >
        <TinyImage src={props.img} />
        <Title view={hover}>{props.title}</Title>
      </MainContainer>
      <SkyLight
        dialogStyles={dialogStyle}
        hideOnOverlayClicked
        ref={(ref) => (simpleDialog = ref)}
        title={props.title}
      >
        <p>posted by: {props.author}</p>
        <RealImage src={props.img} />
      </SkyLight>
    </>
  );
};

export default PictureCard;
