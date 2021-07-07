import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { MainContainer } from './styled';

const CreatePicturePage = () => {
  useProtectedPage();
  return (
    <MainContainer>teste</MainContainer>
  );
}

export default CreatePicturePage;