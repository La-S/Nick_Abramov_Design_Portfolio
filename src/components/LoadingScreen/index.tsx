import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import S from './styles';
import LoadingScreenLogo from './LoadingScreenLogo';

const LoadingScreen = (): JSX.Element => {
  return (
    <S.LoadingScreenContainer>
      <Box className="Loading-Box">
        <CircularProgress 
          variant='determinate'
          size={120}
        />
        <LoadingScreenLogo />
      </Box>
    </S.LoadingScreenContainer>
  );
};

export default LoadingScreen;
