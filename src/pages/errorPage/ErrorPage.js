import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { MainContainer } from './styled';

const ErrorPage = () => {
  useProtectedPage();

  return (
    <MainContainer>errorpage</MainContainer>
  );
}

export default ErrorPage;