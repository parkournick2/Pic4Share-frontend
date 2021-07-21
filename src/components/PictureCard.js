import React, { useState } from "react";
import styled from "styled-components";
import { primaryColor } from "../constants/colors";
import PopPop from "react-poppop";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  :hover {
    p {
      height: 35px;
      color: ${primaryColor};
      border-bottom: 1px solid ${primaryColor};
    }
  }
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

const StyledModal = styled.div``;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Tag = styled.p`
  margin: 0px 5px;
  padding: 2px 5px;
  border-radius: 20px;
  font-weight: 600;
  color: ${primaryColor};
  border: 1px solid ${primaryColor};
`;

const PictureCard = (props) => {
  const [modal, setModal] = useState(false);
  const picture = props.picture;
  const data = new Date(props.picture.date);
  const tags = props.picture.tags.split(",");

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
        <StyledModal>
          <img src={picture.url} />
          <p>
            <b>{picture.title}</b>
          </p>
          <p>
            <b>postado por:</b> {picture.user_nickname}
          </p>
          <TagsContainer>
            <b>tags:</b>
            {tags.map((name) => (
              <Tag>{name}</Tag>
            ))}
          </TagsContainer>
          <p>
            <b>data de postagem:</b> {data.getUTCDate()}/
            {data.getUTCMonth() + 1}/{data.getUTCFullYear()}
          </p>
        </StyledModal>
      </PopPop>
      <MainContainer onClick={() => setModal(true)}>
        <img src={picture.url} />
        <TinyTitle>{picture.title}</TinyTitle>
      </MainContainer>
    </>
  );
};

export default PictureCard;
