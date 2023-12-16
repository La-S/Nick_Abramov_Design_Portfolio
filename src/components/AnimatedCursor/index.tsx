import React from 'react';
import Cursor from 'react-animated-cursor';
import { useTheme, alpha } from '@mui/material';

const AnimatedCursor = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Cursor
      innerSize={8}
      outerSize={43}
      innerStyle={{
        backgroundColor: theme.textColors.main,
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10000,
      }}
      outerStyle={{
        backgroundColor: 'transparent',
        border: `3px solid ${alpha(theme.textColors.main, 0.8)}`,
        zIndex: 10000,
      }}
      outerAlpha={0.9}
      innerScale={0.9}
      outerScale={1.75}
      clickables={['a', 'button', '.Burger']}
    />
  );
};

export default AnimatedCursor;
