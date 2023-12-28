import React, { useContext } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import S from './styles';
import LoadingScreenLogo from './LoadingScreenLogo';
import { GlobalContext } from '../../contexts/global';

const LoadingScreen = (): JSX.Element => {
  const {
    pageLoadingState: [isPageLoading],
  } = useContext(GlobalContext);

  return (
    <AnimatePresence>
      {isPageLoading && (
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 10000,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // You can customize the background color and other styles
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <S.LoadingScreenContainer>
            <Box className="Loading-Box">
              <CircularProgress variant="determinate" value={100} className="Background-Spinner" size={140} />
              <CircularProgress className="Secondary-Moving-Spinner" size={140} disableShrink />
              <CircularProgress className="Main-Moving-Spinner" size={140} disableShrink />
              <LoadingScreenLogo />
            </Box>
          </S.LoadingScreenContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
