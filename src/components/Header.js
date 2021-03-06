import { Button, IconButton, TextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { primaryColor } from "../constants/colors";
import { useHistory } from "react-router-dom";
import { logout } from "../services/user";

const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 60px;
  width: 100%;
  box-shadow: 0px 0px 4px black;
`;
export const Title = styled.h1`
  font-size: 40px;
  font-family: "Passion One", cursive;
  margin: 0px;
  color: ${primaryColor};
`;


const Header = () => {
  const history = useHistory();
  return (
    <MainContainer>
      <Title>Pic4Share</Title>
      <Button
        onClick={() => logout(history)}
        variant="outlined"
        color="primary"
      >
        Logout
      </Button>
    </MainContainer>
  );
};

export default Header;
