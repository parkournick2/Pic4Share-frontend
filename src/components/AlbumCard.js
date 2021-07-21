import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { goToPictures } from "../routes/coordinator";

const BgContainer = styled.div`
  height: 230px;
  width: 230px;
  background-color: white;
  border-radius: 15px;
  transition: 500ms;
  background-image: url(${(props) => props.background});
  background-position: center;
  :hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  }
`;
const MainContainer = styled.div``;
const Title = styled.h5`
  font-size: 20px;
  font-family: "Passion One";
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
  margin: 0px;
`;
const SubTitle = styled.h5`
  font-size: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  margin: 0px;
`;

const AlbumCard = (props) => {
  const history = useHistory();
  return (
    <MainContainer
      onClick={() => {
        goToPictures(history, props.id);
      }}
    >
      <BgContainer background={props.background} />
      <Title>{props.title}</Title>
      <SubTitle>
        {props.count} {props.count !== 1 ? "fotos" : "foto"}
      </SubTitle>
    </MainContainer>
  );
};

export default AlbumCard;
