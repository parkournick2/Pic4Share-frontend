import styled from "styled-components";
import { backgroundColor, neutralColor } from "../../constants/colors";

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
`;

export const SubContainer = styled.div`
  background-color: ${neutralColor};
  flex: 1;
  margin: 30px 150px;
  border-radius: 25px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.25);
`

export const AlbumsContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 0px 20px 20px 20px;
  flex-wrap: wrap;
  justify-content: center;
`

export const Title = styled.h2`
  color: rgba(0,0,0,0.6);
  font-family: 'Passion One';
  font-weight: 500;
  font-size: 30px;
  margin: 0px;
`

export const TitleContainer = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
`