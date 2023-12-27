import React from 'react';
import S from './styles';
import LoadingScreenLogo from './LoadingScreenLogo';

const LoadingScreen = (): JSX.Element => {
  return (
    <S.LoadingScreenContainer>
      <LoadingScreenLogo />
    </S.LoadingScreenContainer>
  );
};

export default LoadingScreen;
