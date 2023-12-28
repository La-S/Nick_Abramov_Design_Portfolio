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
          value={100}
          className='Background-Spinner'
          size={140}
        />
        <CircularProgress 
          className='Secondary-Moving-Spinner'
          size={140}
          disableShrink
        />
        <CircularProgress 
          className='Main-Moving-Spinner'
          size={140}
          disableShrink
        />
        <LoadingScreenLogo />
      </Box>
    </S.LoadingScreenContainer>
  );
};

export default LoadingScreen;
