import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { MainContainer } from './styled';

const PicturesPage = () => {
  useProtectedPage();
  return (
    <MainContainer>teste</MainContainer>
  );
}

export default PicturesPage;