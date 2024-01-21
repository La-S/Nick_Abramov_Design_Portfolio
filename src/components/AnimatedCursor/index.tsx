import React from 'react';
import Cursor from 'react-animated-cursor';
import { alpha } from '@mui/material';

const AnimatedCursor = (): JSX.Element => {
  return (
    <Cursor
      innerSize={8}
      outerSize={43}
      innerStyle={{
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10000,
        mixBlendMode: 'exclusion',
      }}
      outerStyle={{
        backgroundColor: 'transparent',
        border: `3px solid ${alpha('#ffffff', 0.8)}`,
        zIndex: 10000,
        mixBlendMode: 'exclusion',
      }}
      outerAlpha={0.9}
      innerScale={0.9}
      outerScale={1.75}
      clickables={['a', 'button', '.Burger-Icon', '.Theme-Switch']}
    />
  );
};

export default AnimatedCursor;
