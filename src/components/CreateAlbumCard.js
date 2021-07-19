import React from "react";
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';

const MainContainer = styled.div`
  height: 230px;
  width: 230px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms;
  :hover{
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.25);
  }
`;

const StyledAddIcon = styled(AddIcon)`
  color: rgba(0,0,0,0.5);
  font-size: 50px;
`

const CreateAlbumCard = () => {
  return (
    <MainContainer>
      <StyledAddIcon />
    </MainContainer>
  );
};

export default CreateAlbumCard;
